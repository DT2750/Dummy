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

------------------------------------------------------------------------------

Paragraphs and Line Breaks:

A paragraph is simply one or more consecutive lines of text, separated by one or more blank lines. (A blank line is any line that looks like a blank line — a line containing nothing but spaces or tabs is considered blank.) Normal paragraphs should not be indented with spaces or tabs.

The implication of the “one or more consecutive lines of text” rule is that Markdown supports “hard-wrapped” text paragraphs. This differs significantly from most other text-to-HTML formatters (including Movable Type’s “Convert Line Breaks” option) which translate every line break character in a paragraph into a <br /> tag.

When you do want to insert a <br /> break tag using Markdown, you end a line with two or more spaces, then type return.

Yes, this takes a tad more effort to create a <br />, but a simplistic “every line break is a <br />” rule wouldn’t work for Markdown. Markdown’s email-style blockquoting and multi-paragraph list items work best — and look better — when you format them with hard breaks.


