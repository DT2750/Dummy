# Dummy

Google "markdown syntax", grab the first link, paste URL below

(or you could just type this one)

https://daringfireball.net/projects/markdown/syntax

To save in Nano, Control + X, Y for yes, Enter

I vim'd
Do you even vim, bro?

vim commands:
i is insert
escape to stop inserting
:wq is quit with save
:quit! is force quit without save

to get out, hit escape, then type colon :
either with wq or quit!

------------------------------------------------------------------------------

A First Level Header
====================

A Second Level Header
---------------------

------------------------------------------------------------------------------

Phrase Emphasis :

Some of these words *are emphasized*.
Some of these words _are emphasized also_.

Use two asterisks for **strong emphasis**.
Or, if you prefer, __use two underscores instead__.

------------------------------------------------------------------------------

Lists :

Unordered (bulleted) lists use asterisks, pluses, and hyphens (*, +, and -) as list markers. These three markers are interchangable; this:

*   Candy.
*   Gum.
*   Booze.
this:

+   Candy.
+   Gum.
+   Booze.
and this:

-   Candy.
-   Gum.
-   Booze.

------------------------------------------------------------------------------

Links :

Markdown supports two styles for creating links: inline and reference. With both styles, you use square brackets to delimit the text you want to turn into a link.

Inline-style links use parentheses immediately after the link text. For example:

This is an [example link](http://example.com/).

------------------------------------------------------------------------------

Images :

Image syntax is very much like link syntax.

Inline (titles are optional):

![alt text](/path/to/img.jpg "Title")

------------------------------------------------------------------------------

Code :

In a regular paragraph, you can create code span by wrapping text in backtick quotes. Any ampersands (&) and angle brackets (< or >) will automatically be translated into HTML entities. This makes it easy to use Markdown to write about HTML example code:

I strongly recommend against using any `<blink>` tags.

I wish SmartyPants used named entities like `&mdash;`
instead of decimal-encoded entites like `&#8212;`.
