<?php
	$likethis_array[0] = "Uber";
	$likethis_array[1] = "AirBnB";
	$likethis_array[2] = "Ravelry";
	$likethis_array[3] = "Facebook";
	$likethis_array[4] = "Twitter";
	$likethis_array[5] = "Instagram";
	$likethis_array[6] = "Snapchat";
	$likethis_array[7] = "Spotify";
	$likethis_array[8] = "Yellow Pages";
	$likethis_array[9] = "MySpace";
	$likethis_array[10] = "Periscope";
	$likethis_array[11] = "Etsy";
	$likethis_array[12] = "Craig&rsquo;s List";
	$likethis_array[13] = "Gumtree";
	$likethis_array[14] = "Costco";
	$likethis_array[15] = "7-Eleven";
	$likethis_array[16] = "Amazon";
	$likethis_array[17] = "Ask Jeeves";
	$likethis_array[18] = "Yahoo Answers";
	$likethis_array[19] = "Wikipedia";
	$likethis_array[20] = "a garage sale";
	$likethis_array[21] = "the tooth fairy";
	$likethis_array[22] = "Santa&rsquo;s sack";
	$likethis_array[23] = "Google Maps";
	$likethis_array[24] = "Kickstarter";
	$likethis_array[25] = "a TV renovations show";
	$likethis_array[26] = "Netscape Navigator";
	$likethis_array[27] = "Tindr";
	$likethis_array[28] = "BuzzFeed";
	$likethis_array[29] = "The New York Times";
	$likethis_array[30] = "Netflix";
	$likethis_array[31] = "The App Store";
	$likethis_array[32] = "Apple Pay";
	$likethis_array[33] = "Foursquare";
	$likethis_array[34] = "American Idol";
	$likethis_array[35] = "Top Model";
	$likethis_array[36] = "Die Hard";

	$forthat_array[0] = "memorabillia";
	$forthat_array[1] = "poodles";
	$forthat_array[2] = "dance routines";
	$forthat_array[3] = "cheese toasties";
	$forthat_array[4] = "chicken salt";
	$forthat_array[5] = "flip phones";
	$forthat_array[6] = "out of date prunes";
	$forthat_array[7] = "unopened Christmas cards";
	$forthat_array[8] = "recycled toner cartridges";
	$forthat_array[9] = "elephant poo";
	$forthat_array[10] = "Mario Kart";
	$forthat_array[11] = "replacement kidneys";
	$forthat_array[12] = "soviet era military surplus";
	$forthat_array[13] = "buying elections";
	$forthat_array[14] = "rats";
	$forthat_array[15] = "out of date medicine";
	$forthat_array[16] = "MiniDisc players";
	$forthat_array[17] = "public nudity";
	$forthat_array[18] = "false teeth";
	$forthat_array[19] = "chewing with your mouth shut";
	$forthat_array[20] = "rusty bottle caps";
	$forthat_array[21] = "bad Picasso forgeries";
	$forthat_array[22] = "beards";
	$forthat_array[23] = "bears";
	$forthat_array[24] = "unaffordable housing";
	$forthat_array[25] = "goats cheese";
	$forthat_array[26] = "trapped wind";
	$forthat_array[27] = "listicles";
	$forthat_array[28] = "unlicensed heart surgeons";
	$forthat_array[29] = "off-brand baked beans";
	$forthat_array[30] = "poetry that&rsquo;s meant to rhyme but really doesn&rsquo;t";
	$forthat_array[31] = "ways to enjoy raw onions";
	$forthat_array[32] = "drug smugglers";
	$forthat_array[33] = "painfully hot curry";
	$forthat_array[34] = "American foreign policy";
	$forthat_array[35] = "art made out of cheese";

	$likethis;
	$forthat;

	$likethis_no = rand(0, count($likethis_array)-1);
	$forthat_no = rand(0, count($forthat_array)-1);

	if($_GET["like"] && is_numeric($_GET["like"])) {
		$likethis = $likethis_array[$_GET["like"]];
	}
	else {
		$likethis = $likethis_array[$likethis_no];
	}

	if($_GET["for"] && is_numeric($_GET["for"])) {
		$forthat = $forthat_array[$_GET["for"]];
	}
	else {
		$forthat = $forthat_array[$forthat_no];
	}

	$thisforthat = "it's like " . $likethis . " for " . $forthat;
?>

<!DOCTYPE html>
<html lang="en">
	<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# 
                  website: http://ogp.me/ns/website#">
		<meta charset="utf-8">

		<meta property="og:title" content="It's Like This for That">
		<meta property="og:type" content="website" />
		<meta property="og:url" content="http://itslikethisforthat.com" />
		<meta property="og:description" content="&ldquo;All you need is a good idea,&rdquo; they say. If you don&rsquo;t have one of those, try our start-up idea generator." />
		
		<title>It's Like This for That</title>

		<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:400|PT+Sans' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="style.css" type="text/css" media="all">

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script type="text/javascript" src="scripts.js"></script>
	</head>

	<body>

		<script>

		</script>

		<div class="wrapper">

			<header>
				<h1>It&rsquo;s Like This for That</h1>
				<h2>itslikethisforthat.com</h2>
			</header>

			<section id="itslike">
				&ldquo;It&rsquo;s like <span id="this" class="what"><?php echo $likethis; ?></span> for <span id="that" class="what"><?php echo $forthat; ?></span>.&rdquo;
			</section>

			<section class="share">
				<a class="share-button" href="http://itslikethisforthat.com"><i class="icon-lightbulb"></i> have another idea </a>
				<button id="open" class="share-button" ><i class="icon-comment-empty"></i> pitch to your friends </button>
			</section>

			<section id="about">
				<p>&ldquo;All you need is a good idea,&rdquo; they say. If you don&rsquo;t have one of those, try our start-up idea generator. Everyone, from venture capitalists to former high-school classmates will be impressed with your business acumen and savvy.</p>

				<p>Don&rsquo;t forget us once you&rsquo;ve made it!</p>

				<p><a href="http://www.twitter.com/neilmcgwyre" target="_blank">@neilmcgwyre</a> & <a href="http://www.twitter.com/nyssajayne" target="_blank">@nyssajayne</a></p>
			</section>
		</div>

		<div class="overlay"> </div>
		
		<i id="close" class="icon-cancel"></i>

		<div class="modal">
			<p>if you can trust them, share your idea with your  friends on Twitter or Facebook.</p>

			<section class="share">
				<a href="http://twitter.com/intent/tweet?text=I had a great idea, <?php echo $thisforthat; ?>. Get yours at itslikethisforthat.com" class="share-button" target="_blank"><i class="icon-twitter"></i> Twitter </a>
				<button class="share-button" onclick="postToFeed('I\'ve got an idea! It\'s like <?php echo $likethis; ?> for <?php echo $forthat; ?>!', 'http://itslikethisforthat.com/?like=<?php echo $likethis_no; ?>&for=<?php echo $forthat_no; ?>', 'Get your own idea at It\'s Like This for That.');"><i class="icon-facebook"></i> Facebook </button>
			</section>
		</div>

	</body>

</html>