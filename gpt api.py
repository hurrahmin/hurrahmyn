import requests
import json

# OpenAI API 키
API_KEY = ''

# API 요청 URL
url = 'https://api.openai.com/v1/chat/completions'

# 요청 헤더
headers = {
    'Content-Type': 'application/json',
    'Authorization': f'Bearer {API_KEY}'
}

# 대화 메시지 설정
messages = [
    {'role': 'system', 'content': 'You are a helpful assistant.'},
    {'role': 'user', 'content': '이슬아 작가의 부지런한 사랑 이라는 책에 잘 어울리는 음악 10가지 추천해줘'}
]

# API 요청 데이터
data = {
    'model': 'gpt-3.5-turbo',
    'messages': messages
}

# ChatGPT API 요청 보내기
response = requests.post(url, headers=headers, json=data)
response_json = response.json()

# API 응답에서 답변 추출하기
answer = response_json['choices'][0]['message']['content']

# 출력
print(answer)

