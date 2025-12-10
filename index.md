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

{% assign folder_indexes = site.pages | where:"name","index.md" | where_exp:"p","p.dir != '/'" %}

{% for p in folder_indexes %}
  {% assign p.sort_name = p.dir | remove:'/' | downcase %}
{% endfor %}

{% assign folder_indexes_sorted = folder_indexes | sort:"sort_name" %}
{% for p in folder_indexes_sorted %}
  <li>
    <a href="{{ p.url }}">
      {{ p.title | default: p.dir | remove:'/' | capitalize }}
    </a>
  </li>
{% endfor %}

</ul>
