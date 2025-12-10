---
layout: default
title: plaintextspokane
---
**Something missing? Let <a href="https://komments.cloud/dc9bb8e114433037405a64" target="_blank">me know ↑</a>**
<ul>
{% for p in site.pages %}
  {% if p.dir == "/" and p.name != "index.md" %}
    <li><a href="{{ p.url }}">{{ p.title | default: p.name | replace: '.md','' }}</a></li>
  {% endif %}
{% endfor %}
{% assign folder_indexes = site.pages | where:"name","index.md" | where_exp:"p","p.dir != '/'" | sort:"dir" %}
{% for p in folder_indexes %}
  <li><a href="{{ p.url }}">{{ p.title | default: p.dir | remove: '/' | capitalize }}</a></li>
{% endfor %}
</ul>
