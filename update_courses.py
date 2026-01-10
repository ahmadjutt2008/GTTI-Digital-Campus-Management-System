
import os

directory = 'courses'
replacements = {
    'href="style.css"': 'href="../style.css"',
    'src="script.js"': 'src="../script.js"',
    'src="images/': 'src="../images/',
    'href="index.html': 'href="../index.html'
}

for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        for old, new in replacements.items():
            new_content = new_content.replace(old, new)
            
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")
        else:
            print(f"No changes for {filename}")
