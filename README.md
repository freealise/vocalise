# vocalise

<p>Includes a speech formant synthesizer, as well as definition and translation, lookup of word forms or common phrases by part of speech, sentence parser and text editor with spell and grammar checking through Google API.</p>

<p>Is a web service written in Javascript and Google Script, compatible with major browsers and mobile platforms.<br/>
Dictionary by <a href="http://www.speech.cs.cmu.edu/cgi-bin/cmudict" title="Carnegie Mellon University" target="_blank"><u>CMU</u></a>, sorted by frequency based on <a href="https://books.google.com/ngrams" title="Google Books Ngrams" target="_blank"><u>Google Books Ngrams</u></a> with <a href="https://phrasefinder.io/" title="PhraseFinder" target="_blank"><u>PhraseFinder</u></a>.</p>
  
formants -> phonemes (rhyme) -> <a href='https://en.wikipedia.org/wiki/Phonestheme' target='_blank'>phonesthemes</a> -> syllables (rhythm) -> morphemes -> words -> phrases -> sentences (4 types) -> story (form)  
form as story structure, tune and rhythm as stress pattern, and inline rhyme or alliteration as hypnosis  
  
<p><b>TODO:</b><br/>
- add sound and spectrograms to keyboard; phoneme spectrograms of the person's native language superimposed on the one for target to interpolate  
- connect phonemes on keyboard with lines of opacity varying by frequency of them following each other  
- add stress pattern and number of syllables; search by syllables|stresses|phonemes|vowels|consonants; rhyme by each syllable with checkboxes  
- https://englishprofile.org/?menu=egp-online, https://englishprofile.org/?menu=evp-online  
- https://www.omniglot.com/conscripts/phonobraille.htm<br/>  
- translate https://vyuka.lingea.cz/anglictina/gramatika, 'grammar in tables & schemes' -> Simple English Wikipedia<br/>
- use tone letters and spaces of different width for sentence structure<br/>
- option for search with nearby phoneme substitutes, additions and removals<br/>
- phoneme recognition (https://docs.opencv.org/3.4/d6/de2/tutorial_py_table_of_contents_ml.html, https://docs.opencv.org/3.4/d5/dc4/tutorial_adding_images.html)<br/>
- shuffled flashcards combining into sentences (for formants/phonemes as by keyboard rows and columns, according to frequency to arrange by SSP; for words if facing up are a poetry set - practical, if down are solitaire / poker game - educational); stake money that can be won or lost according to in|correct answers<br/>  
- roulette | slot machine with word sets (textareas with infinite scroll)<br/>
- word tree / net from dict: first noun in description of same pos is parent, synonyms if parents of each other (or similar descriptions in controlled vocabulary to exclude synonyms and recursion within them)<br/>  
  
- use https://concepticon.clld.org/parameters with LTWF<br/>
- add web and fiction word frequency data ?<br/>
- writing and reading, speaking and listening with gemini and google TTS / STT (speech recognition typing in textarea) with pitch detector<br/>
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

<pre>
(test: Think in / Listen to / Speak / Read / Write in a foreign language  
  read and write, hear and speak letters and phonemes, syllables and morphemes, words, phrases and sentences, story structure)  
- sort primes by POS and opposites, map to programming language (js | py)
              use https://concepticon.clld.org/parameters with ltwf
              pitch / formant corrector for multilingual vocaloid (google tts)
              highlight the point in cefr examples and use as blank space to fill, words in datalist as options, 
              add phrases and idioms (?)
              prompt AI for pictograms of basic words
              average basic vocabulary definitions with AI; pos and recursive word definition similarity as hint and auto correctness checker (Levenstein distance for word definitions and definition of every word in them - https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance or https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder with dataset from cefr and dictionary examples), assess by translation to native language
  (https://www.englishprofile.org/english-grammar-profile/egp-online, https://www.englishprofile.org/wordlists/evp, https://learnenglish.britishcouncil.org/)
            words keyboard like poetry set (heap of words to drag and click, sort by POS and frequency, use defining vocabulary)
            popup definitions from several dictionaries
            use scrolling vector image with long radial gradient instead of ascii ?
            apply multitouch (?) pointer interface to spectrograms (_interface with velocity / acceleration as depth) 
              (https://developer.squareup.com/blog/smoother-signatures/)
            detect syllables and phonemes by volume / spectrum to prolong vowels and reduce consonants (common TTS)
              (https://www.lingea.com/pronunciation-training)
            improve phoneme charts (show interpolation; dots in 2 rows ?)
              phoneme symbols based on dots instead of pseudographics
              type phoneme formants from keyboard with 48 keys and interpolate
            hsl on phonetic keyboard (sonority = saturation, voiced = lightness; =lil-gui ?)
              draw phonemes with mouse as hsl color vector (<input type="color" value="#ff0000" id="color_v"/>)
            rewrite / edit / shorten awkward LTWF entries (on server), 
              add examples (may be in verse although harder to translate)
            highlight question words on basic word set (https://en.m.wikipedia.org/wiki/Interrogative_word, https://en.m.wikipedia.org/wiki/English_interrogative_words)
            add morphology (https://www.affixes.org/themes/index.html)
            wiki / diff (etherpad + tiddlywiki) embedded on network page
            ! PhraseFinder discontinued: fix punctuation, add ngrams.dev
            add opensiddur.org, lyricfind.com as libraries
            word tree chart for phrases ?
              data from chart json tree ? (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#examples)
            compose as many as possible sentences with words of different pos from top of list + 1-3 new each day
  2-nd formant has the most range and precision; formants of perceived vowels are aligned linearly to harmonic resonances
  women and children's formants are wider due to higher voice pitch keeping the same number of resonating harmonics per formant
</pre>