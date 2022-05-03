---
layout: default
---

<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.css"> -->
<link rel="stylesheet" href="/assets/css/bootstrap_styles.css">
<script src="/assets/js/libs/jquery.js"></script>
<script src="/assets/js/libs/bootstrap.js"></script>
<script src="/assets/js/libs/d3v6.min.js"></script>

<div class="container" style="height:100%; width:100%">
  Explore the MUFaSAA Dataset by selecting the different tabs for different interactive data visualizations.

  <ul class="nav nav-tabs nav-justified">
    <li class="active"><a data-toggle="tab" href="#browse">Browse</a></li>
    <li><a data-toggle="tab" href="#discover">Discover</a></li>
    <li><a data-toggle="tab" href="#compare">Compare</a></li>
  </ul>

  <div class="tab-content" style="height:100%; width:100%">
    <div id="browse" class="tab-pane fade in active">
      <ul id="robot-list" style="display:flex; width:100%;flex-wrap:wrap;padding-left:50px;text-align:center;"></ul>
      <script src="/assets/js/viz/browse.js"></script>
    </div>
    <div id="discover" class="tab-pane fade">
      <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div id="compare" class="tab-pane fade">
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
  </div>
</div>




<!-- <script src="/assets/js/libs/d3v6.min.js"></script>
<script src="/assets/js/libs/distillv2.min.js"></script>

<figure id="subsection1">
      <h4>Functional Perception:</h4>
      <div class="button-container" id="functional" style="text-align: center;">
        <button id="nonverbal" name="NONVERBAL">Nonverbal Communication</button>
        <button id="perception" name="PERCEPTION">Perception and Interpretation</button>
        <button id="tactile_mobility" name="TACTILE_MOBILITY">Tactile Interaction and Mobility</button>
        <br>
        <button id="ambiguity" name="AMBIGUITY">Design Ambiguity</button>
        <button id="atypicality" name="ATYPICALITY">Design Atypicality</button>
      </div>
      <h4>Social Perception:</h4>
      <div class="button-container" id="social" style="text-align: center;">
        <button id="warmth" name="WARMTH">Warmth</button>
        <button id="competence" name="COMPETENCE">Competence</button>
        <button id="discomfort" name="DISCOMFORT">Discomfort</button>
        <button id="role" name="ROLE">Role</button>
        <br>
        <button id="masculine" name="MASCULINE">Masculinity</button>
        <button id="feminine" name="FEMININE">Feminity</button>
        <button id="likeability" name="LIKEABILITY">Likeability</button>
        <button id="identify" name="IDENTIFY">Identity Closeness</button>
      </div>
      <br>
      <svg id="tsne_dataviz"></svg>
</figure>

<div class="row " style="justify-content: center;">
  <div class="col-10 ">
    <div id="multifacet_dataviz"></div>
  </div>
  <div class="col-2 ">
    <div id="wordCloud" class="zoomBox"></div>
  </div>
</div>

<figure>
    <div id="robotImg" class="zoomBox"></div>
</figure>

<div id="dropdown" class="row"> </div> -->






<!-- <script src="/assets/js/main.js"></script>
<script src="/assets/js/multifacet.js"></script>
<script src="/assets/js/graph.js"></script>
<script src="/assets/js/loadImages.js"></script>

<script src="/assets/js/tsne.js"></script> -->