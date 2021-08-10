import sys
import json

imp_obj = json.loads(sys.argv[1])


print(imp_obj['title'])
print(imp_obj['description'])
