import re


text = """ORIGIN      
        1 malwmrllpl lallalwgpd paaafvnqhl cgshlvealy lvcgergffy tpktrreaed
       61 lqvgqvelgg gpgagslqpl alegslqkrg iveqcctsic slyqlenycn
//"""


text_clean = re.sub(r'ORIGIN|\s|\d+', '', text)[:110]


if len(text_clean) == 110:
    print("Text Clean: ", text_clean)
else:
    print("The text is not 110 characters.")
    
with open("preproinsulin-seq-clean.txt", "w") as file:
    file.write(text_clean)


sequence_1_24 = text_clean[0:24]

with open("lsinsulin-seq-clean.txt", "w") as file:
    file.write(sequence_1_24)
    
sequence_25_54 = text_clean[24:54]

with open("binsulin-seq-clean.txt", "w") as file:
    file.write(sequence_25_54)
    
sequence_55_89 = text_clean[54:89]

with open("cinsulin-seq-clean.txt", "w") as file:
    file.write(sequence_55_89)
    
sequence_90_110 = text_clean[89:110]

with open("cinsulin-seq-clean.txt", "w") as file:
    file.write(sequence_90_110)
    


