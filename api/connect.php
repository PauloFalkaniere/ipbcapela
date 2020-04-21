<?php

class Connect{
    private $host = 'localhost';
    private $database = 'IPBCAPELA';
    private $user = 'falkaniere';
    private $pwd = 'sfhp1712';
    private $table;
    private $conn = null;
    private $sql;


    function __construct($table){
        $this->table = $table;
        $this->link();
    }

    public function set_sql($sql){
        $this->sql = $sql;
    }

    private function link(){
        $this->conn = new mysqli($this->host, $this->user, $this->pwd, $this->database);
        if ($this->conn->connect_errno) {
            throw new Exception("Failed to connect to MySQL: (" . $this->conn->connect_errno . ") " . $this->conn->connect_error, 1);
            
        }
    }

    public function persist(){
        $result = $this->conn->query($this->sql); 
        $this->conn->close();
        return $result;
    }

}

?>