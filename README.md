# vocalise

<p>Includes a speech formant synthesizer, as well as definition and translation, lookup of word forms or common phrases by part of speech, sentence parser and text editor with spell and grammar checking through Google API.</p>

<p>Is a web service written in Javascript and Google Script, compatible with major browsers and mobile platforms.<br/>
Dictionary by <a href="http://www.speech.cs.cmu.edu/cgi-bin/cmudict" title="Carnegie Mellon University" target="_blank"><u>CMU</u></a>, sorted by frequency based on <a href="https://books.google.com/ngrams" title="Google Books Ngrams" target="_blank"><u>Google Books Ngrams</u></a> with <a href="https://phrasefinder.io/" title="PhraseFinder" target="_blank"><u>PhraseFinder</u></a>.</p>
  
formants -> phonemes (rhyme) -> <a href='https://en.wikipedia.org/wiki/Phonestheme' target='_blank'>phonesthemes</a> -> syllables (rhythm) -> morphemes -> words -> phrases -> sentences (4 types) -> story (form)  
form as story structure, tune and rhythm as stress pattern, and inline rhyme or alliteration as hypnosis  
  
<p><b>TODO:</b><br/>
- translate https://slovniky.lingea.cz/, https://vyuka.lingea.cz/, https://www.dict.com/ ?<br/>
- use tone letters and spaces of different width for sentence structure<br/>
- option for search with nearby phoneme substitutes, additions and removals<br/>
- deterministic natural language parser (https://github.com/lagodiuk/earley-parser-js, https://github.com/lagodiuk/decision-tree-js)<br/>
- phoneme recognition (https://docs.opencv.org/3.4/d6/de2/tutorial_py_table_of_contents_ml.html, https://docs.opencv.org/3.4/d5/dc4/tutorial_adding_images.html)<br/>
- shuffled flashcards combining into sentences (for formants/phonemes as by keyboard rows and columns, according to frequency to arrange by SSP; for words if facing up are a poetry set - practical, if down are solitaire / poker game - educational); stake money that can be won or lost according to in|correct answers<br/>  
- word tree / net from dict: first noun in description of same pos is parent, synonyms if parents of each other (or similar descriptions in controlled vocabulary to exclude synonyms and recursion within them)<br/>  
  
- use https://concepticon.clld.org/parameters with LTWF<br/>
- add web and fiction word frequency data ?<br/>
- writing and reading, speaking and listening with gemini and google tts / stt (speech recognition typing in textarea)<br/>
- reverse dictionary with AI and several dictionaries with defining vocabulary<br/>
- better defining dictionary and example sentences (english wiktionary / voa instead of oxford)<br/>
- highlighting with color as a mnemonic device (not in the order of reading but same frequent words, letters or phonemes all over the text)<br/>
- input formant patterns from keyboard like chords<br/>
- optimize to search and load faster with indexes for words based on consonants and vowels (release node.js scripts)<br/>
- add sound for diphtongs, British pronounciation (use a dictionary from the defining) and IPA transcription<br/>
- highlight short and long vowels (in British version)<br/>
- definitions in several languages (Google provides some but not all)<br/>
- underline only pronounced vowels<br/>
- calligraphy (touch sensitivity)<br/>
- app for android (also with ordinary keyboard sorted by sound)<br/>
- sentiment analysis for value shift; credit and post on forum (Blake Snyder et al. - savethecat.com, Robert McKee - mckeestory.com, Shawn Coyne - storygrid.com)<br/>
- algorithmic filter for explicit / overused / repetitive words and synonyms suggestion<br/>
- more languages (Hebrew, _)
</p>
