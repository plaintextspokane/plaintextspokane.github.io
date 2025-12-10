---
layout: default
title: plaintextspokane
---
**Something missing? Let <a href="https://komments.cloud/dc9bb8e114433037405a64" target="_blank">me know ↑</a>**
<ul>
{% for p in site.pages %}
  {% if p.name == "index.md" and p.dir != "/" %}
    <li><a href="{{ p.url }}">{{ p.title | default: p.dir | remove: '/' }}</a></li>
  {% endif %}
{% endfor %}
</ul>
<ul>
{% for p in site.pages %}
  {% if p.dir == "/" and p.name != "index.md" %}
    <li><a href="{{ p.url }}">{{ p.title | default: p.name | replace: '.md','' }}</a></li>
  {% endif %}
{% endfor %}
</ul>
