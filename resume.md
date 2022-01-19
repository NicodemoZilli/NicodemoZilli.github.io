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
<i><b>Last Update:</b> January 19th 2022</i>


<h4>Experience:</h4>
<ul>
    <li>
      <b>Java Backend Developer TecNM CENIDET</b>
      Developing a Backend Java application for calculating quality metrics of software architectures
      <i >August 2021 - December 2021</i>
    </li>
</ul>

<h4>Education:</h4>
<ul>
  <b>Computerstystems Engineering, Tecnológico Nacional de México Campus Orizaba / ITO </b> Specialty in Web Engineering <i> August 2017 - December 2021 </i>
</ul>
<ul>
  <b>Support and Maintenance of Computer Equipment Technician, Centro de Bachillerato Tecnológico Industrial y de Servicios No. 47 CBTIS No. 47 </b> CED. PROF. 12557082 <i> August 2014 - July 2017 </i>
</ul>

<h4>Scientific Production:</h4>
<ul>
  <b>Coloquio de Investigación Multidisciplinaria CIM, TecNM campus Orizaba</b>
  Educational Research, "Análisis de la realidad del aprendizaje de programación en el Instituto Tecnológico de Orizaba"  
  <i>Octubre 2018</i>
  <br><a href="assets/docs/material-CIM2018.pdf" target="_blank">material</a>
  <br><a href="http://cim.orizaba.tecnm.mx/?page_id=161" target="_blank">event site</a>
</ul>
<h4>Courses:</h4>
<ul>
 {% for item in site.courses %}
  <b>{{item}}</b><br>
 {% endfor%}
</ul>
