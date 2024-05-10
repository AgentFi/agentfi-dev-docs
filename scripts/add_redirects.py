# adds redirects to the build

# list of [from, to]
redirects = [
    ['/docs/protocol/governance', '/docs/admin/overview']
]

for redirect in redirects:
    src = redirect[0]
    dst = redirect[1]
    filename = f"build{src}"
    content = f"<meta http-equiv=\"Refresh\" content=\"0; url='https://dev-docs.agentfi.io{dst}'\"/>"
    # TODO: verify path exists
    file_w = open(filename, 'w')
    _ = file_w.write(content)
    file_w.close()
