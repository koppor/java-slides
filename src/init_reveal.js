Reveal.initialize({
 width:960, height:700,
 controls: false, 
 navigationMode: 'linear',
 slideNumber: 'c', 
 showSlideNumber: 'all',
 pdfMaxPagesPerSlide: 1,
 progress: false,
 hash: true, 
 center: false,
 mouseWheel: true,
 pdfSeparateFragments: false,
 transition: 'none', // none/fade/slide/convex/concave/zoom
 keyboard: { 
    27: null // don't do anything when ESC is pressed 
 },
 sampler : {
   removeIndentation: true
 },
 dependencies: [
    { src: 'reveal.js/plugin/markdown/marked.js' },
    { src: 'reveal.js/plugin/markdown/markdown.js' },
    { src: 'reveal.js/plugin/notes/notes.js', async: true },
    { src: 'reveal.js/plugin/highlight/highlight.js', async: true },
    { src: 'reveal.js/plugin/zoom-js/zoom.js', async: true },
    { src: 'reveal.js/plugin/math/math.js', async: true },
    { src: 'reveal.js/plugin/search/search.js', async: true },
    { src: 'src/sql.js', async: true },
    { src: 'src/clone.js', async: true },
    { src: 'src/erd.js' },
    { src: 'plugins/jump.js', async: true },
    { src: 'plugins/badges.js' },
    { src: 'plugins/sampler.js' }
]
});