(function (window, undefined) {
	"use strict";

	var defer = function () {
		if (!jQuery) return setTimeout(defer, 300);
		libraryBlock(jQuery);
	};
	document.addEventListener("DOMContentLoaded", defer);
	
	function libraryBlock($) {
		if (!String.prototype.trim) { //Internet Explorer does  not support .trim()
			String.prototype.trim = function() {
				return this.replace(/^\s+|\s+$/g,'');
			};
		}
		var courseName = $('.breadcrumb li:nth-child(2) a').html(); //course name is in the <a> in the second <li> in the 'breadcrumb' div
		var alpha = courseName.split(" ")[1].trim(); //space separates the term from the alpha
		var courseID = alpha.split("-")[0].trim(); //hyphens separate each section in the alpha, we're matching on the first section
		console.log("The course name is " + courseName);
		console.log("The alpha is " + alpha);
		console.log("The courseID is " + courseID);
		function librarian(name,email,phone){ //constructor to create "librarian" objects
			this.name=name;
			this.email=email;
			this.phone=phone;
		}
		var Les = new librarian("Les Canterbury","les_canterbury@redlands.edu","(909) 748-8081");
		var Shana = new librarian("Shana Higgins","shana_higgins@redlands.edu","(909) 748-8097");
		var Janelle = new librarian("Janelle Julagay","janelle_julagay@redlands.edu","(909) 748-8083");
		var Bill = new librarian("Bill Kennedy","bill_kennedy@redlands.edu","(909) 748-8087");
		var Lua = new librarian("Lua Gregory","lua_gregory@redlands.edu","(909) 748-8904");
		var Paige = new librarian("Paige Mann","paige_mann@redlands.edu","(909) 748-8088");
		var Sanjeet = new librarian("Sanjeet Mann","sanjeet_mann@redlands.edu","(909) 748-8051");
		var Various = new librarian("Various","library@redlands.edu","(909) 748-8022");
		var myLibrarian; //variable to store librarian subject affiliations
		var libGuide; //variable to store url of research guide
		switch(courseID){   //depending on the course alpha, assign the correct research guide, url and librarian
			case "ACCT":
				libGuide = "http://library.redlands.edu/business";
				myLibrarian = Janelle;
				break;
			case "ACCTCS":
				libGuide = "http://library.redlands.edu/business";
				myLibrarian = Janelle;
				break;
			case "ART":
				libGuide = "http://library.redlands.edu/art";
				myLibrarian = Sanjeet;
				break;
			case "ARTCS":
				libguide = "http://library.redlands.edu/art";
				myLibrarian = Sanjeet;
				break;
			case "ARTH":
				libGuide = "http://library.redlands.edu/vms";
				myLibrarian = Shana;
				break;
			case "AST":
				libGuide = "http://library.redlands.edu/ast";
				myLibrarian = Shana;
				break;
			case "BAMG":
				libGuide = "http://library.redlands.edu/business";
				myLibrarian = Janelle;
				break;
			case "BIOL":
				libGuide = "http://library.redlands.edu/biology";
				myLibrarian = Les;
				break;
			case "BLCM":
				libGuide = "http://library.redlands.edu/biology";
				myLibrarian = Les;
				break;
			case "BUAD":
				libGuide = "http://library.redlands.edu/business";
				myLibrarian = Janelle;
				break;
			case "BUS":
				libGuide = "http://library.redlands.edu/business";
				myLibrarian = Janelle;
				break;
			case "BUSB":
				libGuide = "http://library.redlands.edu/business";
				myLibrarian = Janelle;
				break;
			case "BUSCS":
				libGuide = "http://library.redlands.edu/business";
				myLibrarian = Janelle;
				break;
			case "CHEM":
				libGuide = "http://library.redlands.edu/chemistry";
				myLibrarian = Les;
				break;
			case "CHNS":
				libGuide = "http://library.redlands.edu/ast";
				myLibrarian = Shana;
				break;
			case "CDIS":
				libGuide = "http://library.redlands.edu/comdis";
				myLibrarian = Paige;
				break;
			case "CDISCS":
				libGuide = "http://library.redlands.edu/cdis";
				myLibrarian = Paige;
				break;
			case "CMHC":
				libGuide = "http://library.redlands.edu/education";
				myLibrarian = Lua;
				break;
			case "CS":
				libGuide = "http://library.redlands.edu/cs";
				myLibrarian = Paige;
				break;
			case "CSAC":
				libGuide = "http://library.redlands.edu/guides";
				myLibrarian = Shana;
				break;
			case "CSCS":
				libGuide = "http://library.redlands.edu/cs";
				myLibrarian = Paige;
				break;
			case "CRWR":
				libGuide = "http://library.redlands.edu/crwr";
				myLibrarian = Sanjeet;
				break;
			case "DNCE":
				libGuide = "http://library.redlands.edu/music";
				myLibrarian = Sanjeet;
				break;
			case "ECON":
				libGuide = "http://library.redlands.edu/economics";
				myLibrarian = Janelle;
				break;
			case "ECONCS":
				libGuide = "http://library.redlands.edu/economics";
				myLibrarian = Janelle;
				break;
			case "EDUC":
				libGuide = "http://library.redlands.edu/education";
				myLibrarian = Lua;
				break;
			case "EDUCCS":
				libGuide = "http://library.redlands.edu/education";
				myLibrarian = Lua;
				break;
			case "EDUG":
				libGuide = "http://library.redlands.edu/education";
				myLibrarian = Lua;
				break;
			case "ENGL":
				libGuide = "http://library.redlands.edu/english";
				myLibrarian = Lua;
				break;
			case "ENGB":
				libGuide = "http://library.redlands.edu/english";
				myLibrarian = Lua;
				break;
			case "EVST":
				libGuide = "http://library.redlands.edu/evst";
				myLibrarian = Les;
				break;
			case "EVSTCS":
				libGuide = "http://library.redlands.edu/evst";
				myLibrarian = Les;
				break;
			case "FINC":
				libGuide = "http://library.redlands.edu/business";
				myLibrarian = Janelle;
				break;
			case "FREN":
				libGuide = "http://library.redlands.edu/french";
				myLibrarian = Lua;
				break;
			case "FS":
				libGuide = "http://library.redlands.edu/fs";
				myLibrarian = Various;
				break;
			case "GIS":
				libGuide = "http://library.redlands.edu/gis";
				myLibrarian = Paige;
				break;
			case "GISB":
				libGuide = "http://library.redlands.edu/gis";
				myLibrarian = Paige;
				break;
			case "GRMN":
				libGuide = "http://library.redlands.edu/german";
				myLibrarian = Lua;
				break;
			case "HIST":
				libGuide = "http://library.redlands.edu/history";
				myLibrarian = Bill;
				break;
			case "HISTCS":
				libGuide = "http://library.redlands.edu/history";
				myLibrarian = Bill;
				break;
			case "HADCS":
				libGuide = "http://library.redlands.edu/guides";
				myLibrarian = Janelle;
				break;
			case "HAST":
				libGuide = "http://library.redlands.edu/hast";
				myLibrarian = Les;
				break;
			case "HLSC":
				libGuide = "http://library.redlands.edu/biology";
				myLibrarian = Les;
				break;
			case "HRCS":
				libGuide = "http://library.redlands.edu/business";
				myLibrarian = Janelle;
				break;
			case "HUMB":
				libGuide = "http://library.redlands.edu/guides";
				myLibrarian = Janelle;
				break;
			case "IPE":
				libGuide = "http://library.redlands.edu/ir";
				myLibrarian = Bill;
				break;
			case "IDS":
				libGuide = "http://library.redlands.edu/guides";
				myLibrarian = Shana;
				break;
			case "INFT":
				libGuide = "http://library.redlands.edu/cs";
				myLibrarian = Paige;
				break;
			case "INTB":
				libGuide = "http://library.redlands.edu/business";
				myLibrarian = Janelle;
				break;
			case "GLIS":
				libGuide = "http://library.redlands.edu/ir";
				myLibrarian = Bill;
				break;
			case "IPPS":
				libGuide = "http://library.redlands.edu/ir";
				myLibrarian = Bill;
				break;
			case "IR":
				libGuide = "http://library.redlands.edu/ir";
				myLibrarian = Bill;
				break;
			case "ISYS":
				libGuide = "http://library.redlands.edu/cs";
				myLibrarian = Paige;
				break;
			case "JNST":
				libGuide = "http://library.redlands.edu/johnston";
				myLibrarian = Shana;
				break;
			case "JPNS":
				libGuide = "http://library.redlands.edu/ast";
				myLibrarian = Shana;
				break;
			case "LAST":
				libGuide = "http://library.redlands.edu/last";
				myLibrarian = Shana;
				break;
			case "LBST":
				libGuide = "http://library.redlands.edu/education";
				myLibrarian = Lua;
				break;
			case "LIB":
				libGuide = "http://library.redlands.edu/guides";
				myLibrarian = Shana;
				break;
			case "MALT":
				libGuide = "http://library.redlands.edu/education";
				myLibrarian = Lua;
				break;
			case "MATH":
				libGuide = "http://library.redlands.edu/mathematics";
				myLibrarian = Paige;
				break;
			case "MGMT":
				libGuide = "http://library.redlands.edu/business";
				myLibrarian = Janelle;
				break;
			case "MUAP":
				libGuide = "http://library.redlands.edu/music";
				myLibrarian = Sanjeet;
				break;
			case "MUS":
				libGuide = "http://library.redlands.edu/music";
				myLibrarian = Sanjeet;
				break;
			case "MUSI":
				libGuide = "http://library.redlands.edu/music";
				myLibrarian = Sanjeet;
				break;
			case "MUSCS":
				libGuide = "http://library.redlands.edu/music";
				myLibrarian = Sanjeet;
				break;
			case "MVC":
				libGuide = "http://library.redlands.edu/vms";
				myLibrarian = Shana;
				break;
			case "Org":
				libGuide = "http://library.redlands.edu/guides";
				myLibrarian = Various;
				break;
			case "ORG":
				libGuide = "http://library.redlands.edu/guides";
				myLibrarian = Various;
				break;
			case "PE":
				libguide = "http://library.redlands.edu/guides";
				myLibrarian = Les;
				break;
			case "PEAC":
				libGuide = "http://library.redlands.edu/guides";
				myLibrarian = Les;
				break;
			case "PHIL":
				libGuide = "http://library.redlands.edu/philosophy";
				myLibrarian = Bill;
				break;
			case "PHOT":
				libGuide = "http://library.redlands.edu/art";
				myLibrarian = Sanjeet;
				break;
			case "PHYS":
				libGuide = "http://library.redlands.edu/physics";
				myLibrarian = Paige;
				break;
			case "PMCS":
				libGuide = "http://library.redlands.edu/guides";
				myLibrarian = Janelle;
				break;
			case "POLI":
				libGuide = "http://library.redlands.edu/poli";
				myLibrarian = Bill;
				break;
			case "POLICS":
				libGuide = "http://library.redlands.edu/poli";
				myLibrarian = Bill;
				break;
			case "PSYC":
				libGuide = "http://library.redlands.edu/psychology";
				myLibrarian = Lua;
				break;
			case "REST":
				libGuide = "http://library.redlands.edu/rest";
				myLibrarian = Shana;
				break;
			case "REL":
				libGuide = "http://library.redlands.edu/relst";
				myLibrarian = Bill;
				break;
			case "RELCS":
				libGuide = "http://library.redlands.edu/relst";
				myLibrarian = Bill;
				break;
			case "SALZ":
				libguide = "http://library.redlands.edu/german";
				myLibrarian = Lua;
				break;
			case "SCIB":
				libGuide = "http://library.redlands.edu/guides";
				myLibrarian = Les;
				break;
			case "SOAN":
				libGuide = "http://library.redlands.edu/soan";
				myLibrarian = Shana;
				break;
			case "SOCB":
				libGuide = "http://library.redlands.edu/soan";
				myLibrarian = Shana;
				break;
			case "SPA":
				libGuide = "http://library.redlands.edu/gis";
				myLibrarian = Paige;
				break;
			case "SPAN":
				libGuide = "http://library.redlands.edu/spanish";
				myLibrarian = Lua;
				break;
			case "SPANCS":
				libGuide = "http://library.redlands.edu/spanish";
				myLibrarian = Lua;
				break;
			case "SPCH":
				libGuide = "http://library.redlands.edu/guides";
				myLibrarian = Bill;
				break;
			case "SPRO":
				libGuide = "http://library.redlands.edu/guides";
				myLibrarian = Shana;
				break;
			case "SSCI":
				libGuide = "http://library.redlands.edu/guides";
				myLibrarian = Shana;
				break;
			case "SSRV":
				libGuide = "http://library.redlands.edu/guides";
				myLibrarian = Shana;
				break;
			case "TEST":
				libGuide = "http://library.redlands.edu/music";
				myLibrarian = Sanjeet;
				break;
			case "THA":
				libGuide = "http://library.redlands.edu/theatre";
				myLibrarian = Sanjeet;
				break;
			case "UACT":
				libGuide = "http://library.redlands.edu/guides";
				myLibrarian = Shana;
				break;
			case "VMS":
				libGuide = "http://library.redlands.edu/vms";
				myLibrarian = Shana;
				break;
			case "WRITCS":
				libGuide = "http://library.redlands.edu/guides";
				myLibrarian = Shana;
				break;
			case "WGST":
				libGuide = "http://library.redlands.edu/wgst";
				myLibrarian = Shana;
				break;
			default:
				libGuide = "http://library.redlands.edu/guides";	
				myLibrarian = Shana;
				break;
		}
		var block = $("#LibraryBlock"); //the library div has the id LibraryBlock
		block.html("<p><a id='libraryLink' href='http://library.redlands.edu/guides' target='_blank'><img class='icon' alt='' src='http://www.ala.org/tools/sites/ala.org.tools/files/content/libfactsheets/librarysymbol.gif' height='16' width='16' />Research Guide</a></p><div id='librarianInfo' style='text-align:center;'></div><p style='text-align: center; font-size: x-small; font-style: italic;'>Chat with a librarian <br />(press F5 to update status)</p><div id='libchat_1ea98310ed913a530804236e5decd22d'></div>"); //inserts static HTML into the library block
		var chatScriptURL = "http://v2.libanswers.com/load_chat.php?hash=1ea98310ed913a530804236e5decd22d";
		$.getScript(chatScriptURL); //loads and evaluates the chat widget script
		var libraryLink = $("#libraryLink"); //the library link is the <a> with id of "libraryLink" 
		libraryLink.attr("href",libGuide); //overwrite the 'href' attribute with the correct discipline specific url
		var librarianInfo = $("#librarianInfo"); //div with id 'librarianInfo' will contain contact information
		librarianInfo.html("<p id='librarianName'></p><p id='librarianEmail'></p><p id='librarianPhone'></p>"); //create the <p> to hold contact info
		var librarianName = "Your librarian: " + myLibrarian["name"]; //add explanatory text to the librarian contact info
		var librarianEmail = myLibrarian["email"];
		var librarianPhone = myLibrarian["phone"];
		$("#librarianName").html(librarianName); //write librarian contact info to the appropriate <p> tags
		$("#librarianEmail").html(librarianEmail);
		$("#librarianPhone").html(librarianPhone);
	}
})(window);