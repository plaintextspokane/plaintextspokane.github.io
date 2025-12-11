---
layout: default
title: plaintextspokane
---
**Something missing? Let <a href="https://komments.cloud/dc9bb8e114433037405a64" target="_blank">me know ↑</a>**

<ul>
{% assign folder_indexes = site.pages | where:"name","index.md" | where_exp:"p","p.dir != '/'" %}
{% for p in folder_indexes %}
  <li><a href="{{ p.url }}">{{ p.title | default: p.dir | remove:'/' | capitalize }}</a></li>
{% endfor %}
</ul>


<ul>
{% assign root_pages = site.pages | where:"dir","/" | where_exp:"p","p.name != 'index.md'" %}
{% for p in root_pages %}
  <li><a href="{{ p.url }}">{{ p.title | default: p.name | replace: ".md","" }}</a></li>
{% endfor %}
</ul>
