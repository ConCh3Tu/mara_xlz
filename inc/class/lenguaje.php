<?php
/**
* Lenguaje
*/
class lenguaje {
	private $key;

	function __construct($k = 'en') {
		$this->key = $k;
	}
	public function getIdioma() {		
		$file = 'inc/lenguaje/'.$this->key.'.inc.php';		
		
		if (is_file($file)) {
			include_once $file;
		}else {
			include_once 'inc/lenguaje/en.inc.php';
		}
		return $id;
	}
}

?>