      // Get the element with id="defaultOpen" and click on it
      document.getElementById("defaultOpen").click();

      function openTab(evt, TabName) {
        var i, tabcontent, tablinks;
         // Get all elements with class="containercompany__Tabsection__Tab1" and hide them
        tabcontent = document.getElementsByClassName("containercompany__Tabsection__Tab1");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        // Get all elements with class="tablinks","Tabsection__titles__title" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        tablinksDiv = document.getElementsByClassName("Tabsection__titles__title");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
         tablinksDiv[i].className = tablinksDiv[i].className.replace(" active", "");
        }
        // Show the current tab, and add an "active" class to the div that opened the tab
        document.getElementById(TabName).style.display = "flex";
        evt.currentTarget.className += " active";
      }
