#!/usr/bin/env python
# coding: utf-8

# In[3]:


# load text
filename = 'articles1.csv'
file = open(filename, 'rt')
text = file.read()
file.close()

# split into words by white space
words = text.split()

# remove punctuation from each word
import string
table = str.maketrans('', '', string.punctuation)
stripped = [w.translate(table) for w in words]
print(stripped[:100])

# convert to lower case
words = [word.lower() for word in words]
print(words[:100])


# In[ ]:




