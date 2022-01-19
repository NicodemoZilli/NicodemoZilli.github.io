---
layout: page
title: Resume
---

<style>
.cvbutton {
  display: inline-block;
  padding: 13px 25px;; margin-right:5px;
  font-size: 1.2em;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #7D3C98;
  border: none;
  border-radius: 15px;
}

.cvbutton:hover {
  background-color: #3498DB;
  box-shadow: 0 12px 16px 0 rgba(255,255,255,0.30), 0 17px 50px 0 rgba(0,0,0,0.20);
}

.cvbutton:active {
  background-color: #424949;
  transform: translateY(4px);
}
</style>

# My résumé

<center>
<a class="cvbutton" href="/assets/docs/aca_resume.pdf" target="_blank"><span><img src="/assets/images/pdf.png" height="18px" style="padding-top:5px; margin-right:5px;">  Full Size </span></a>
<a class="cvbutton" href="/assets/docs/resume.pdf" target="_blank"><span><img src="/assets/images/pdf.png" height="18px" style="padding-top:5px; margin-right:5px;">  One Page </span></a>
</center>


---
<i><b>Última actualización:</b> {{ site.lastupdate }}</i>


<h2>Experiencia:</h2>
<ul>
{% for item in site.experience.items() %}
    <li>
      <h3>{{ item.position }}</h3>
      <h4>{{ item.company }}</h4>
      <p>{{ item.description }}</p>
      {% if item.link %}
        <p><a href="{{ item.link }}">Reference link.</a></p>
      {% endif %}
      <i >{{ item.from }} - {{ item.to }}</i>
    </li>
{% endfor %}
</ul>

<h4>EDUCACIÓN:</h4>
<ul>
  <b>name</b> data <i>date</i>

</ul>
<h4>DESARROLLO PROFESIONAL / ACTIVIDADES LABORALES:</h4>
<ul>
  <b>name</b> data <i>date</i>

</ul>
<h4>PROYECTOS / EMPRENDIMIENTO / PARTICIPACIÓN EN PROGRAMAS, EVENTOS, ACTIVIDADES:</h4>
<ul>
  <b>name</b> data <i>date</i>

</ul>

<h4>CONCURSOS / COMPETENCIAS, PREMIOS Y DISTINCIONES:</h4>
<ul>
  <b>name</b> data <i>date</i>

</ul>
<h4>PERTENENCIA / ACTIVIDADES DE PARTICIPACIÓN SOCIAL:</h4>
<ul>
  <b>name</b> data <i>date</i>

</ul>
