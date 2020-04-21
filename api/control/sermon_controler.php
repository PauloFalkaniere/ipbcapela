<?php

class SermonController{
    private $id; 
    private $title;
    private $passage;
    private $preacher_name;
    private $url;
    private $script;



    public function get_table_name(){
        return $this->table_name;
    }

}

//$result->fetch_assoc();
?>