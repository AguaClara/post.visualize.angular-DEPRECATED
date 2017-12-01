import { Component, OnInit } from '@angular/core';

import { ClarityIcons } from 'clarity-icons';
import 'clarity-icons/shapes/all-shapes';

@Component({
  selector: 'navigation',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  	ClarityIcons.add({"post-icon": `
  		<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" >
<svg xmlns="http://www.w3.org/2000/svg">
<metadata>Generated by IcoMoon</metadata>
<defs>
<font id="icomoon" horiz-adv-x="1024">
<font-face units-per-em="1024" ascent="960" descent="-64" />
<missing-glyph horiz-adv-x="1024" />
<glyph unicode="&#x20;" horiz-adv-x="512" d="" />
<glyph unicode="&#xe900;" glyph-name="POSTicon" d="M819.448 755.873c-57.068 0-103.502-46.769-103.502-104.255 0-31.695 14.13-60.11 36.364-79.248l-97.256-186.126c-8.576 2.324-17.578 3.584-26.872 3.584-22.21 0-42.794-7.108-59.67-19.149l-74.013 67.244c8.461 15.101 13.316 32.515 13.316 51.054 0 57.488-46.434 104.255-103.506 104.255-57.068 0-103.502-46.769-103.502-104.255 0-27.75 10.84-52.98 28.454-71.68l-110.252-165.873c-11.563 4.507-24.11 7.007-37.235 7.007-57.071 0-103.5-46.769-103.5-104.255s46.429-104.255 103.502-104.255c57.068 0 103.502 46.769 103.502 104.255 0 27.75-10.84 52.983-28.454 71.683l110.252 165.873c11.563-4.507 24.11-7.007 37.235-7.007 22.214 0 42.794 7.108 59.674 19.15l74.008-67.244c-8.456-15.101-13.313-32.513-13.313-51.054 0-57.486 46.434-104.255 103.502-104.255 57.072 0 103.506 46.769 103.506 104.255 0 31.695-14.134 60.11-36.364 79.246l97.253 186.125c8.576-2.324 17.578-3.585 26.872-3.585 57.072 0 103.502 46.769 103.502 104.255s-46.431 104.255-103.503 104.255zM181.777 95.791c-31.961 0-57.962 26.191-57.962 58.384s26.001 58.384 57.962 58.384c31.961 0 57.962-26.191 57.962-58.384s-26.001-58.384-57.962-58.384zM404.31 430.594c-31.961 0-57.962 26.191-57.962 58.381 0 32.194 26.001 58.384 57.962 58.384s57.966-26.191 57.966-58.384c0-32.191-26.005-58.381-57.966-58.381zM570.221 285.576c0 32.189 26.001 58.38 57.962 58.38s57.966-26.191 57.966-58.38c0-32.194-26.005-58.384-57.966-58.384s-57.962 26.191-57.962 58.384zM819.448 593.234c-31.961 0-57.962 26.191-57.962 58.384s26.001 58.384 57.962 58.384c31.961 0 57.962-26.191 57.962-58.384 0-32.195-26.001-58.384-57.962-58.384zM739.682 544.878l-222.743 298.103-222.763-298.13c-35.876-48.167-54.839-105.455-54.839-165.669 0-153.070 124.532-277.601 277.601-277.601s277.601 124.531 277.601 277.601c0 60.216-18.962 117.504-54.858 165.697zM516.939 147.434c-127.786 0-231.747 103.961-231.747 231.747 0 50.271 15.824 98.087 45.738 138.25l186.009 248.942 185.989-248.913c29.935-40.191 45.759-88.006 45.759-138.279-0.001-127.786-103.962-231.747-231.749-231.747z" />
</font></defs></svg>
	`});
  }

}
