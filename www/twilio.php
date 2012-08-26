<?php
include_once('bitly.php');

// trim off spaces
$zip = trim($_POST['body']);

// encode long url for use with the bitly api.
$longurl = urlencode('http://coderfair.seanmumford.com/index.html?zip=' . $zip);

// use api to get shortened url.
$shorturl = bitly_v3_shorten($longurl);

// generate short url and add body as zip parameter
header("content-type: text/xml");
echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
?>
<Response>
<Sms><?php echo $shorturl['url']; ?></Sms>
</Response>