import os
import re

def remove_line_containing(file_path, target_string):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        new_lines = [line for line in lines if target_string not in line]
        
        if len(lines) != len(new_lines):
            with open(file_path, 'w', encoding='utf-8') as f:
                f.writelines(new_lines)
            print(f"Updated: {file_path}")
        else:
            print(f"No match in: {file_path}")
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

def main():
    base_dir = r"e:\GitHub\GTTI-Digital-Campus-Management-System"
    
    # 1. Update Course Pages
    courses_dir = os.path.join(base_dir, "courses")
    if os.path.exists(courses_dir):
        for filename in os.listdir(courses_dir):
            if filename.endswith(".html") and filename != "index.html": # assuming there might be an index in courses too, though not strictly specified, safe to check. 
                # Actually checking grep results, there isn't a courses/index.html with the link, but let's be safe.
                # The target line in courses is: <li><a href="../index.html#lms">LMS</a></li>
                file_path = os.path.join(courses_dir, filename)
                remove_line_containing(file_path, '<li><a href="../index.html#lms">LMS</a></li>')

    # 2. Update Auth Pages
    auth_dir = os.path.join(base_dir, "auth")
    if os.path.exists(auth_dir):
        for root, dirs, files in os.walk(auth_dir):
            for filename in files:
                if filename.endswith(".html"):
                    # The target line in auth is: <li><a href="../../index.html#lms">LMS</a></li>
                    file_path = os.path.join(root, filename)
                    remove_line_containing(file_path, '<li><a href="../../index.html#lms">LMS</a></li>')

if __name__ == "__main__":
    main()
