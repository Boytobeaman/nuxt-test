<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-screen-md">
      <p>System message:</p>
      <textarea v-model="systemMessage" placeholder="ask your question" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <p>Your question:</p>
      <textarea v-model="message" placeholder="ask your question" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <div>
          <button id="count" :disabled="loading" class="inline-flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="send">
            <svg v-show="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            Send
          </button>
      </div>
      <div class="h-80 overflow-y-scroll mt-5">
          <p>{{ respData }}</p>
      </div>
      
    </div>
  </div>
</template>

<script setup>

definePageMeta({
  layout: 'noFooter'
})

import { ref } from 'vue';
import { fetchEventSource, EventStreamContentType } from '@microsoft/fetch-event-source';
const loading = ref(false)
const message = ref("")
const systemMessage = ref("You are an AI assistant that helps people find information.")
const respData = ref("")

const prettyObject = (msg) => {
  const obj = msg;
  if (typeof msg !== "string") {
    msg = JSON.stringify(msg, null, "  ");
  }
  if (msg === "{}") {
    return obj.toString();
  }
  if (msg.startsWith("```json")) {
    return msg;
  }
  return ["```json", msg, "```"].join("\n");
}

const send = async() => {
    if(!message.value){
        return
    }
    try {
        loading.value=true;
        const payload = {
            "messages": [
                {
                    "role": "system",
                    "content": systemMessage.value ? systemMessage.value :"You are ChatGPT, a large language model trained by OpenAI."
                },
                {
                    "role": "user",
                    "content": message.value
                }
            ],
            "stream": true,
            "model": "gpt-3.5-turbo",
            "temperature": 0.5,
            "presence_penalty": 0,
            "frequency_penalty": 0,
            "top_p": 1
        }

        respData.value=""

        let responseText = ''
        let remainText = ''

        let str = JSON.stringify(payload)
        console.log(str)
        // let finished = false;

        const finish = () => {
        //   if (!finished) {
            // finished = true;
            respData.value = responseText + remainText
            loading.value=false;
            // options.onFinish();
        //   }
        };
 
        fetchEventSource(`https://chat.chatgpt-use.com/api/openai/v1/chat/completions`, {
            method: "POST",
            body: str,
            headers:{
                "Content-type":"application/json",
                "Accept": "application/json"
            },
            onmessage(msg) {
                if (msg.data === "[DONE]") {
                    return finish();
                }
                const text = msg.data;
                try {
                    const json = JSON.parse(text);
                    const choices = json.choices;
                    const delta = choices[0]?.delta?.content;
                    const textmoderation = json?.prompt_filter_results;

                    if (delta) {
                        remainText += delta;
                        return finish()
                    }
                    
                } catch (e) {
                    console.error("[Request] parse error", text, msg);
            }
            },
            async onopen(res) {
                const contentType = res.headers.get("content-type");
                console.log(
                "[OpenAI] request response content type: ",
                contentType,
                );

                if (contentType?.startsWith("text/plain")) {
                    responseText = await res.clone().text();
                    return finish();
                }

                if (
              !res.ok ||
              !res.headers
                .get("content-type")
                ?.startsWith(EventStreamContentType) ||
                res.status !== 200
                ) {
                    const responseTexts = [responseText];
                    let extraInfo = await res.clone().text();
                    try {
                        const resJson = await res.clone().json();
                        extraInfo = prettyObject(resJson);
                    } catch {}

                    
                    if (extraInfo) {
                        responseTexts.push(extraInfo);
                    }

                    responseText = responseTexts.join("\n\n");

                    return finish();
                }
            },
            onerror(e) {
                throw e;
            },
            onclose() {
                finish();
            },
         
        });
        
    } catch (error) {
        console.error('Error fetching user details:', error);
        loading.value=false;
    }
}


</script>
