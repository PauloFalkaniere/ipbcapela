<?php
require('../connect.php');

class Sermon{
    private $id; 
    private $title;
    private $passage;
    private $preacher_name;
    private $url;
    private $script;
    private $table_name = 'sermon';
    private $conn;

    public function __construct(){
        $this->conn = new Connect($this->table_name);
    }

    public function get($id=null){
        if($id == null){
            $sql = "SELECT * FROM {$this->table_name};";
        }else {
            $sql = "SELECT * FROM $this->table_name WHERE id=$id;";
        }
        $this->conn->set_sql($sql);
        return $this->conn->persist()->fetch_assoc();
    }
}


$s = new Sermon();
var_dump($s->get());

?>