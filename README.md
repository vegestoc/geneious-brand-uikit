geneious-brand-uikit
====================

Development kit for Geneious Website

## Page Elements

### Body

The style of the page is dependent on a class on the body tag:

* `home` for the homepage
* `targetedhome` with a describing tag, e.g. `microbiologists` for vocation-specific landing pages.

All relevant elements (the logo, the menu and page-head) will automatically be styled work to the required layout. The HTML of these elements remain the same across all pages.

### Navigation

A class of `here` is added to the `menu-list-item` that is currently active, or a parent of the current page.

### Page-head

Each page's `#main` element starts off with a `.page-head`

	<header class="page-head">
		<h1>Title</h1>
		<h2>Sub-title</h2>
		<p>Auxiliary Content</p>
	</header>
	
### Rows

Following the `page-head` are sections referred to as `row`s.

	<section class="row">
		<figure>
			<img>
		</figure>
		<h2>Title</h2>
		<p>Body copy</p>
	</section>
	
#### Row Alignment

Rows can be aligned left, right or centre using `row-left`, `row-right` and `row-centre` respectively. These classes complement the `row` class — they do not replace it.

	<div class="row row-left">
	
#### Split Rows

Rows can be split using the `row-split` complementary class. By default, rows are split into two. The `row-third` complementary class can be added to `row-split` elements to split the row into three, not two.

When `row-split` is used, the `section`s are inside a `div.row`.

	<div class="row row-split">
		<section></section>
		<section></section>
	</div>

#### Columnise

When elements must be of equal height, a complementary class of `row-columnise` is added to the `row` element. They can be vertically-centred with another complementary `row-middle`.

	<div class="row row-split row-columnise row-middle">
		<section></section>
		<section></section>
	</div>

### Highlighted

Any containing element can be `highlighted` for effect. This works for `row`s, or even `section`s inside `split-row`s

	<section class="row highlighted"></section>
	
	<div class="row row-split highlighted">
		<section></section>
		<section></section>
	</div>


### Forms

#### Buttons

A `button` is always a `button`, never a `button.button`. An anchor may be transformed into a `.button`.
	
	<button>Download</button>
	
	<a class="button" href="#">Download</a>

#### Combining Form Controls

Form controls can be preceded and/or followed by either a `label` or `button`. When combining form controls, we wrap them in an element (usually a `span` but not required) that holds the describing classes for the combination.

	<span class="button-right">
		<input>
		<button></button>
	</span>
	
	<span class="button-right label-left">
		<label></label>
		<input>
		<button></button>
	</span>
	
Options are:

* `button-left`
* `button-right`
* `label-left`
* `label-right`

#### Fieldset

Form controls that belong in a group, should be wrapped in a `fieldset` and they will be visually locked together.

	<fieldset>
		<p>
			<span class="label-left">
			<label></label>
			<input>
			</span>
		</p>
		
		<p>
			<span class="label-left button-right">
			<label></label>
			<select>
				<option></option>
				<option></option>
				<option></option>
			</select>
			<button></button>
			</span>
		</p>
	</fieldset>
	
#### Validation

Validation flags can be added to a parent element for flag validation styles. `valid` or `invalid` are options.

If there is an error, it is thrown into the form control container as a `<small class="description">Feedback</small>`.

	<span class="label-left invalid">
		<label></label>
		<input>
		<small class="description"></small>
	</span>
	
### Bars

Bars used in the site contain specific CTAs. The HTML for each bar should be interchangeable, with only the class differentiating the type of bar.

#### Stretch Bars

Stretch bars are used to stretch content across the width of the screen e.g. the Download Bar

	<section class="stretch-bar" id="download-bar">
		<a href="#" class="button download-button">Download for Mac</a>
        <span class="other-versions">also <a href="#">Windows</a> and <a href="#">Linux</a></span>
	<section>

#### Banner

Swapping the class for `banner` and adding a `bannered` class to the `body` element in the HTML moves a stretch bar up to the top of the screen as a notification-like banner.

	<body class="bannered bannered-download-beta">
	
	<section class="banner" id="download-bar">
		<a href="#" class="button download-button">Download for Mac</a>
        <span class="other-versions">also <a href="#">Windows</a> and <a href="#">Linux</a></span>
	<section>
	
It's useful to add a description class describing the type of banner corresponding to the ID of the element, eg. `bannered-download-bar` or `bannered-beta-bar`.