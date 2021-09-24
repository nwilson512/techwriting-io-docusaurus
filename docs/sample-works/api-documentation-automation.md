---
title: 'API Documentation Automation'
lang: python
description: Fetches API documentation data in JSON and parses it into YAML, then writes that into the frontmatter of the API documentation page. 
---

```python
# fetch needed packages and modules

# we'll use this to call the API using HTTP
import urllib.request

# we'll use this to convert JSON data into YAML
import yaml

# we'll use this to parse string data into JSON
import simplejson

# we'll use this to make file backups
from shutil import copyfile

# we'll use regex to look for the YAML we want to replace
import re

# set the API path variable for the documentation endpoint here
docUrl = 'http://api.test:5656/api/v1/docs'

# using the url library, grab the JSON docs data and save it into an object
docObj = urllib.request.urlopen( docUrl, data = None )

# save that data into a buffer by reading (with the read function) from the memory address saved at docObj
docDat = docObj.read()

# Convert byte data into string data to allow parsing using the decode() function
stringDat = docDat.decode("utf-8")

# parse JSON from a string using the simplejson library's .loads() method
jsonDat = simplejson.loads(stringDat)

# parse YAML data from the JSON data we just created using the PyYAML library's .dump(method)
yamlDat= yaml.dump(jsonDat)

# make a copy of index.md in case something goes wrong, name it "docUpdate.bak". This implementation overwrites the backup every time the script is run. The underscore should help hide the file from Statamic.
copyfile('index.md', '_docUpdate.bak')

# open index.md and read it into a buffer using r+, so it can be updated later
indexFile = open('index.md', 'r+')
indexRead = indexFile.read()

# parse index.md, looking for the '#parseMe' and '#parseStop' flags
# within the parse flags, write the new API data into the index.md content
#   This regex:
#       opens the group: "("
#       matches "#parseMe"
#       but uses a positive lookbehind "?<=" to match only the string AFTER "#parseMe"
#       uses '(?s)'to enable the wildcard '(.*)' to match every character on every line
#       matches "#parseStop" and the new line character sequence "\n"
#       but uses a positive lookahead "?=" to match only the string BEFORE "#parseStop"
#       closes the group ")"
indexWrite = re.sub('(?<=#parseMe\n)(?s)(.*)(?=#parseStop)', yamlDat, indexRead)

# adjust stream position back to the beginning of the file
indexFile.seek(0)

# clear the file in preparation for writing the new data
indexFile.truncate(0)

# write the newly modified data into the file
indexFile.write(indexWrite)

# close the file
indexFile.close()

# indicate completion
print('docUpdate completed')
```