import requests

base_api_url = 'http://127.0.0.1:8000/api'

def post_skills(base_url, name):
    payload = {
        'name': name
    }
    r = requests.post(f'{base_url}/skills/create/', data=payload)
    return r.status_code

with open('skills.txt') as f:
    skill_names = f.readlines()

index = 0
for line in skill_names:
    # Strip the \n
    skill_names[index] = line[:-1]
    index += 1

for skill in skill_names:
    try:
        print(post_skills(base_api_url, skill))
    except Exception as e:
        print(f'Exception {e}')