# links all contract documents to their solidity source code in github

import re

# reads and returns the content of a file
def read_file(filename):
    file_r = open(filename, 'r')
    md = file_r.read()
    file_r.close()
    return md

# writes content to a file
def write_file(filename, body):
    file_w = open(filename, 'w')
    _ = file_w.write(body)
    file_w.close()

# modifies the handlebars output to something better
# remove extraneous row from parameter tables
pattern1 = """
 |"""
replacement1 = """ |
"""
# add blank line after parameter tables
pattern2 = """|
#"""
replacement2 = """|

#"""
# functions with no args should be one line
pattern3 = """(
  )"""
replacement3 = "()"
# multiline natspec
pattern4 = """
        """
replacement4 = "<br/>"
# excessive newlines
re_pattern0 = r"\r"
re_replacement0 = ""
re_pattern1 = r"\n\n+"
re_replacement1 = "\n\n"

patterns = [pattern1, pattern2, pattern3, pattern4]
replacements = [replacement1, replacement2, replacement3, replacement4]
re_patterns = [re_pattern0, re_pattern1]
re_replacements = [re_replacement0, re_replacement1]

def modify_body(filename, body):
    # correct tables
    for i in range(len(patterns)):
        body = body.replace(patterns[i], replacements[i])
    for i in range(len(re_patterns)):
        body = body.replace(patterns[i], replacements[i])
    # add github link
    #print("\nadding github link")
    #print(filename)
    #print(filename[30:-3])
    #print(f"""<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/{filename[30:-3]}.sol">""")
    body = f"""<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/{filename[30:-3]}.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>\n\n{body}"""
    return body

# get files
from glob import glob
filenames = sorted(glob('docs/05-dev-docs/01-contracts/**/*', recursive=True))
filenames = list(filter(lambda filename: filename[-3:] == '.md', filenames))
# loop over files
for filename in filenames:
    #print("fixing", filename)
    # read file
    md = read_file(filename)
    # modify file
    md = modify_body(filename, md)
    # write file
    write_file(filename, md)
