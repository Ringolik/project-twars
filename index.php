<?php
require_once("inc/config.template.php");

$page = new Page("tpl/main/index.html");

$page->replace_tags(array(
  "page_title" => "Tribal wars - the browser game",
  "main" => "dat/index_home.dat",
  "navigation" => "dat/navigation.dat",
  "motto" => "dat/motto.dat",
  "footer" => "dat/footer.dat"
));

$page->output();
?>