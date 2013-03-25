jsPhyloSVG
==========

jsPhyloSVG is an open-source javascript library specifically built for rendering highly-extensible, customizable phylogenetic trees.  jsPhyloSVG can render complex trees, yet offers a simple method to do so. It leverages the recent XML schema definition specified for phylogenetic trees, phyloXML.

Discussion
==========
The original software was about to release version 2 (https://twitter.com/jsPhyloSVG/status/169180192361811968) back in February 2012. However, nothing was released and all communication via their twitter ceased. Rod Page and I briefly discussed the idea they might have "sold out" to Elsevier (http://iphylo.blogspot.co.uk/2012/12/elsevier-articles-have-interactive.html#comment-730119264) and a promised (via email) early v2 draft never surfaced.

Future
======
I still think it is useful and has potential in other projects as a starting point. So, I am placing the old v1.55 code here, as there was no original public source-managed repository of their code and I couldn't find anyone else with a submission. Hopefully, as the code was released under GPL that is acceptable, and maybe some others will fork and add to the features, I am happy to receive pull requests etc. I intend to use it for a few demo projects of my own and will probably put them in a different branch...


Website
=======
I copied the entire website using wget "wget -k -K  -E -r -l 10 -p -N -F --restrict-file-names=windows -nH" in order to preserve the examples pages in case the online version ceases at some point (currently the domain is set to renew in 2014). I understand that these materials may no be under the GPL license of the source code and so will remove it at the request of an original author unless they do not have objections.


Original License
================

This software is distributed under the GPL License.

Copyright (c) Samuel Smits, samsmits@gmail.com
All rights reserved.

If you use this software, please cite:
Smits SA, Ouverney CC, 2010. jsPhyloSVG: A Javascript Library for Visualizing Interactive and Vector-Based Phylogenetic Trees on the Web. 
PLoS ONE 5(8): e12267. doi:10.1371/journal.pone.0012267


Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of the Samuel Smits nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
