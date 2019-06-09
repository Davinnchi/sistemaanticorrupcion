import requests
import json
print("ingrese cedula")
clave = raw_input()
resp = requests.get('https://www.datos.gov.co/resource/nuxh-53y2.json?identificacion_del_contratista='+clave)
data=json.loads(resp.content)
print(data)
