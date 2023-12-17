<?php
// customObject.php

class WebObject {
    private $message;

    public function setMessage($message) {
        $this->message = $message;
    }

    public function displayMessage() {
        echo "<p>$this->message</p>";
    }
}

// Example usage of the WebObject
$obj = new WebObject();
$obj->setMessage("This is a message from the WebObject.");
$obj->displayMessage();
?>
