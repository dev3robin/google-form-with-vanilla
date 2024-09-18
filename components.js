const focusedScreenData = {
      "Short answer":{
            html: `
                  <div class="short-answer-div">
                        <div class="short-answer-text">
                              <p>Short answer text</p>
                        </div>
                  </div>
                  `,
            css:`
            .short-answer-div {
                  margin: 10px 30px 20px 30px;
                  display: flex;
            }

             .short-answer-text {
                  width: 40%;
                  color: grey;
                  font-size: 0.9rem;
                  border-bottom: 2px dotted;
            }
            .short-answer-text p{
                  padding:6px 0px 10px 0px ;
            }
            
            `,
      },
      "Paragraph":{
            html: `
                  <div class="paragraph-div">
                        <div class="paragraph-text">
                              <p>Long answer text</p>
                        </div>
                  </div>
                  `,

            css: `
                  .paragraph-div {
                        margin: 10px 30px 20px 30px;
                        display: flex;
                  }

                  .paragraph-text {
                        color: grey;
                        font-size: 0.9rem;
                        width: 60%;
                        border-bottom: 2px dotted;
                  }     
                        
                  
                  .paragraph-text p{
                        padding:6px 0px 10px 0px ;
            }
            `
      },
      "Multiple choice":{
            html: `
                  <div class="multiple-choice">
                        <div class="option-div">
                              <div><img id="drag-img" src="images/drag_indicator_p.png" alt=""></div>
                              <div class="con">
                                    <div><img class="img" src="images/radio-circle.png" alt=""></div>
                                    <div class="input-box5-div input-section">
                                    <input class="input-box5" type="text" placeholder="Option1">
                                    </div>
                                    <div class="menu-button-container hovered win-btn">
                                          <button class="menu-button">
                                                <span><img class="img" src="images/image.png" alt=""></span>
                                          </button>
                                          <span class="hover-text">Add image</span>
                                    </div>
                              </div>
                        </div>
                        <div class="add-div">
                              <div><img class="img" src="images/radio-circle.png" alt=""></div>
                              <div><button class="add-option-btn">Add Option</button></div>
                              <span>or</span>
                              <div><button class="add-others-btn">Add "Others"</button></div>
                        </div>
                  </div>
            `,
            css:`
                  .multiple-choice {
                        display: flex;
                        flex-direction: column;
                  }

                  .option-div {
                        display: flex;
                        align-items: center;
                        padding-top: 10px;
                        font-size: 0.8rem;
                        color: grey;
                  }

                  #drag-img {
                        height: 20px;
                        width: 20px;
                        opacity: 0;
                        cursor: all-scroll;
                        margin-left: 10px;
                  }

                  .option-div:hover #drag-img {
                        opacity: 1;
                  }
                  .option-div:hover .hovered{
                        opacity: 1;
                  }

                  .con {
                        display: flex;
                        align-items: center;
                        margin-left: 0;
                        width: 100%;
                  }

                  .img {
                        height: 25px;
                        width: 25px;
                        }

                  .input-box5-div {
                        width: 80%;
                        margin-left: 10px;
                        border-bottom: 1px solid transparent;
                  }

                  .input-box5 {
                        width: 100%;
                        outline: none;
                        border: none;
                        padding: 10px 0;
                  }

                  .input-box5::placeholder {
                        font-size: 0.9rem;
                        color: black;
                  }

                  .hovered {
                        opacity: 0;
                        margin-left: 10px;
                  }

                  .add-div {
                        display: flex;
                        margin: 0 30px;
                        align-items: center;
                        font-size: 0.8rem;
                  }

                  .add-option-btn {
                        background-color: transparent;
                        border: none;
                        color: rgb(128, 123, 123);
                        font-size: 0.9rem;
                        margin-right: 5px;
                        border-bottom: 1px solid transparent;
                  }

                  .add-option-btn:hover {
                        border-bottom: 1px solid rgb(202, 200, 200);
                        transition: 0.1s ease-in;
                  }

                  .add-others-btn {
                        background-color: transparent;
                        border: none;
                        color: rgb(108, 164, 237);
                        font-size: 0.9rem;
                        padding: 13px 10px;
                  }

                  .add-others-btn:hover {
                        background-color: #f3f5f7;
                        transition: 0.2s ease-in;
                        border-radius: 4px;
                  }

                  .add-div > span {
                        font-size: 1rem;
                        color: rgb(90, 76, 76);
                  }
                 
            `         
      },
      "Checkboxes":{
            html: `
                  <div class="checkbox">
                        <div class="option-div">
                              <div><img id="drag-img" src="images/drag_indicator_p.png" alt=""></div>
                              <div class="con">
                                    <div><img class="img" src="images/check_box.png" alt=""></div>
                                    <div class="input-box5-div input-section">
                                          <input class="input-box5" type="text" placeholder="Option1">
                                    </div>
                                    <div class="menu-button-container hovered win-btn">
                                          <button class="menu-button">
                                                <span><img class="img" src="images/image.png" alt=""></span>
                                          </button>
                                          <span class="hover-text">Add image</span>
                                    </div>
                              </div>
                        </div>
                        <div class="add-div">
                              <div><img class="img" src="images/check_box.png" alt=""></div>
                              <div><button class="add-option-btn">Add Option</button></div>
                              <span>or</span>
                              <div><button class="add-others-btn">Add "Others"</button></div>
                        </div>
                  </div>
            `,
            css:`
                  .checkbox {
                        display: flex;
                        flex-direction: column;
                  }

                  .option-div {
                        display: flex;
                        align-items: center;
                        padding-top: 10px;
                        font-size: 0.8rem;
                        color: grey;
                  }

                  #drag-img {
                        height: 20px;
                        width: 20px;
                        opacity: 0;
                        cursor: all-scroll;
                        margin-left: 10px;
                  }

                  .option-div:hover #drag-img {
                        opacity: 1;
                  }

                  .option-div:hover .hovered{
                        opacity: 1;
                  }

                  .con {
                        display: flex;
                        align-items: center;
                        margin-left: 0;
                        width: 100%;
                  }

                  .img {
                        height: 25px;
                        width: 25px;
                        }

                  .input-box5-div {
                        width: 80%;
                        margin-left: 10px;
                        border-bottom: 1px solid transparent;
                  }

                  .input-box5 {
                        width: 100%;
                        outline: none;
                        border: none;
                        padding: 10px 0;
                  }

                  .input-box5::placeholder {
                        font-size: 0.9rem;
                        color: black;
                  }

                  .hovered {
                        opacity: 0;
                        margin-left: 10px;
                  }

                  .input-box5-div:focus-within ~ .hovered,
                  .option-div:hover .hovered {
                        
                  }

                  .add-div {
                        display: flex;
                        margin: 0 30px;
                        align-items: center;
                        font-size: 0.8rem;
                  }

                  .add-option-btn {
                        background-color: transparent;
                        border: none;
                        color: rgb(128, 123, 123);
                        font-size: 0.9rem;
                        margin-right: 5px;
                        border-bottom: 1px solid transparent;
                  }

                  .add-option-btn:hover {
                        border-bottom: 1px solid rgb(202, 200, 200);
                        transition: 0.1s ease-in;
                  }

                  .add-others-btn {
                        background-color: transparent;
                        border: none;
                        color: rgb(108, 164, 237);
                        font-size: 0.9rem;
                        padding: 13px 10px;
                  }

                  .add-others-btn:hover {
                        background-color: #f3f5f7;
                        transition: 0.2s ease-in;
                        border-radius: 4px;
                  }

                  .add-div > span {
                        font-size: 1rem;
                        color: rgb(90, 76, 76);
                  }
                 
            `  
       },
      "Drop-down":{
            html:`
                  <div class="drop-down">
                        <div class="dropdown-option-div">
                              <div><img id="drag-img" src="images/drag_indicator_p.png" alt=""></div>
                              <span>1.</span>
                              <div class="input-box6-div input-section">
                                    <input class="input-box6" type="text" placeholder="Option1">
                              </div>
                        </div>
                        <div class="dropdown-add-div">
                              <span>2.</span>
                              <div><button class="dropdown-add-option-btn">Add Option</button></div>
                        </div>
                  </div>                  
            `,
            css:`
                  .drop-down {
                        display: flex;
                        flex-direction: column;
                  }

                  .dropdown-option-div {
                        display: flex;
                        align-items: center;
                        padding-top: 10px;
                        margin-bottom: 20px;
                        font-size: 0.8rem;
                        border-bottom: 1px solid transparent;
                  }

                  #drag-img {
                        height: 20px;
                        width: 20px;
                        opacity: 0;
                        cursor: all-scroll;
                        margin-left: 10px;
                  }

                  .dropdown-option-div:hover #drag-img {
                        opacity: 1;
                  }

                  .input-box6-div {
                        width: 80%;
                        margin-left: 10px;
                  }

                  .input-box6 {
                        width: 99%;
                        border: none;
                        outline: none;
                        padding-bottom: 5px;
                  }

                  .input-box6-div:hover {
                        border-bottom: 1px solid rgb(198, 196, 196);
                  }

                  .input-box6::placeholder {
                        color: black;
                        font-size: 1rem;
                  }

                  .dropdown-add-div {
                        display: flex;
                        margin: 0 30px;
                        align-items: center;
                        font-size: 0.8rem;
                  }

                  .drop-down > div > span {
                        display: flex;
                        color: black;
                        align-items: center;
                        font-size: 1rem;
                  }

                  .dropdown-add-option-btn {
                        background-color: transparent;
                        border: none;
                        color: rgb(128, 123, 123);
                        font-size: 1rem;
                        margin-left: 5px;
                        border-bottom: 1px solid transparent;
                  }

                  .dropdown-add-option-btn:hover {
                        border-bottom: 1px solid rgb(212, 210, 210);
                  }
            `
      },
      "File upload":{
            html: `
                  <div class="file-upload">
                        <div class="file-upload-box">
                              <div class="file-top-layer">
                                    Let respondents upload files to Drive
                              </div>
                              <div class="paragraph-section">
                                    Files will be uploaded to the form owner's Google Drive. Respondents will be required to sign in
                                    to Google when file upload questions are added to a form. Please only share this form with people you trust.
                              </div>
                              <div class="button-section">
                                    <div><button>Cancel</button></div>
                                    <div><button>Continue</button></div>
                              </div>
                        </div>
                  </div>
            `,
            css:`
                  .file-upload-box {
                        color: rgb(89, 85, 85);
                        display: flex;
                        flex-direction: column;
                  }

                  .file-top-layer {
                        padding: 0 30px;
                        font-size: 1.2rem;
                        color: black;
                  }

                  .paragraph-section {
                        margin-top: 20px;
                        font-size: 0.8rem;
                        padding: 0 30px;
                        line-height: 1.1rem;
                  }

                  .button-section {
                        display: flex;
                        justify-content: flex-end;
                        gap: 5px;
                        padding: 10px 30px 10px 0;
                  }

                  .button-section > div > button {
                        border: none;
                        background-color: transparent;
                        font-size: 1rem;
                        border-radius: 5px;
                        padding: 10px;
                  }

                  .button-section > div > button:hover {
                        background-color: #f4f5f6;
                  }
            `
      },
      "Linear scale":{
            html:`
                  <div class='linear-scale'>
                        <div class='linear-scale-top'>
                              <div class='num-dropdown-1'>
                                    <div class='num-dropdown-button-1'>
                                          <button class='btn-1' id='dropdownBtn1' onclick='initializeDropdown()'>0<span class='arrow'>▼</span></button>
                                    </div>
                                    <div class='num-dropdown-content-1' id='dropdownContent1'>
                                          <button value='0'>0</button>
                                          <button value='1'>1</button>
                                    </div>
                              </div>
                              <span>to</span>
                              <div class='num-dropdown-2'>
                                    <div class='num-dropdown-button-2'>
                                          <button class='btn-2' id='dropdownBtn2'>2<span class='arrow'>▼</span></button>
                                    </div>
                                    <div class='num-dropdown-content-2' id='dropdownContent2'>
                                          <button value='2'>2</button>
                                          <button value='3'>3</button>
                                          <button value='4'>4</button>
                                          <button value='5'>5</button>
                                          <button value='6'>6</button>
                                          <button value='7'>7</button>
                                          <button value='8'>8</button>
                                          <button value='9'>9</button>
                                          <button value='10'>10</button>
                                    </div>
                              </div>
                        </div>
                        <div class='label-input-1'>
                              <div class='num-drop-1' id='numDrop1'>1</div>
                              <div class='labelInput-div'><input type='text' name='' id='labelInput' placeholder='Label (optional)'></div>
                        </div>
                        <div class='label-input-2'>
                              <div class='num-drop-2'>2</div>
                              <div class='labelInput-div'><input type='text' name='' id='labelInput' placeholder='Label (optional)'></div>
                        </div>
                  </div>
                  `,
            css:`
                  .linear-scale {
                        margin: 0px 30px;
                        display: block;
                  }
                  .linear-scale-top {
                        display: flex;
                        align-items: start;
                        padding: 10px 0px;
                  }
                  .linear-scale-top > span {
                        margin: 15px 15px 15px 10px;
                        font-size: 1rem;
                  }
                  .num-dropdown-button-1, .num-dropdown-button-2 {
                        display: flex;
                        align-items: center;
                  }
                  .btn-1, .btn-2 {
                        padding: 15px 10px;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 70px;
                        font-size: .9rem;
                        background-color: transparent;
                        border: none;
                  }
                  .arrow {
                        padding-left: 10px;
                  }
                  .num-dropdown-content-1 {
                        display: none;
                        position: absolute;
                        flex-direction: column;
                        background-color: white;
                        box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.2);
                        z-index: 1;
                        transform: translateY(-70%);
                  }
                  .num-dropdown-content-1 button {
                        border: none;
                        font-size: 1rem;
                        background-color: transparent;
                        padding: 15px 30px;
                  }
                  .num-dropdown-content-1 button:hover {
                        background-color: rgb(230, 232, 233);
                  }
                  .num-dropdown-content-1 button.selected1 {
                        background-color: #e3f2f9;
                  }
                  .num-dropdown-content-2 {
                        display: none;
                        position: absolute;
                        flex-direction: column;
                        background-color: white;
                        box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.2);
                        z-index: 1;
                        transform: translateY(-240px);
                  }
                  .num-dropdown-content-2 button {
                        border: none;
                        font-size: 1rem;
                        background-color: transparent;
                        padding: 15px 30px;
                  }
                  .num-dropdown-content-2 button:hover {
                        background-color: rgb(230, 232, 233);
                  }
                  .num-dropdown-content-2 .selected {
                        background-color: #e3f2f9;
                  }
                  .num-dropdown-2:focus-within .num-dropdown-content-2 {
                        display: flex;
                  }
                  .label-input-1, .label-input-2 {
                        display: flex;
                        align-items: center;
                        font-size: 1rem;
                  }
                  #labelInput {
                        outline: none;
                        border: none;
                        font-size: .9rem;
                  }
                  .labelInput-div {
                        margin-left: 20px;
                        padding: 10px 0px;
                        position: relative;
                        border-bottom: 1px solid rgb(202, 199, 199);
                  }
                  .labelInput-div::after {
                        content: '';
                        width: 100%;
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        width: 0;
                        height: 2px;
                        background-color: #673AB7;
                        transition: width 0.4s ease, left 0.4s ease;
                  }
                  .labelInput-div:focus-within::after {
                        width: 100%;
                        left: 0;
                  }
                  `
      },
      "Multiple-choice grid":{
            html:`
                  <div class="multiple-choice-grid">
                        <div class="inner-container-choice-grid">
                              <div class="rows">
                                    <div class="rows-text txt">Rows</div>
                                    <div class="row1">
                                    <div>1.</div>
                                    <div class="rowInput-div rd">
                                          <input type="text" id="rowInput" placeholder="Row 1">
                                    </div>
                                    </div>
                                    <div class="row2">
                                    <div>2.</div>
                                    <div>
                                          <button class="add-row-btn add">Add row</button>
                                    </div>
                                    </div>
                              </div>
                              <div class="columns">
                                    <div class="columns-text txt">Columns</div>
                                    <div class="columns1">
                                    <div class="columns-img-div">
                                          <img id="columns-img" src="images/radio-circle.png" alt="">
                                    </div>
                                    <div class="columnInput-div rd">
                                          <input type="text" id="columnInput" placeholder="Column 1">
                                    </div>
                                    </div>
                                    <div class="columns2">
                                    <div class="columns-img-div">
                                          <img id="columns-img" src="images/radio-circle.png" alt="">
                                    </div>
                                    <div>
                                          <button class="add-column-btn add">Add column</button>
                                    </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            `,
            css:`
                  .inner-container-choice-grid {
                        display: flex;
                        margin: 0 30px;
                  }

                  .rows, .columns {
                        width: 50%;
                  }

                  .row1, .row2, .columns1, .columns2 {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        font-size: 1rem;
                  }

                  .row1, .row2, .columns1, .columns2 {
                        padding: 10px 0;
                  }

                  .rd {
                        width: 80%;
                  }

                  #rowInput, #columnInput {
                        outline: none;
                        border: none;
                        width: 100%;
                        padding: 8px 0;
                        font-size: 1rem;
                  }

                  #rowInput::placeholder, #columnInput::placeholder {
                        font-size: 1rem;
                  }

                  .add {
                        border: none;
                        background-color: transparent;
                        font-size: 1rem;
                        color: grey;
                        border-bottom: 1px solid transparent;
                  }

                  .add:hover {
                        border-bottom: 2px solid rgb(194, 191, 191);
                  }

                  .txt {
                        padding-top: 20px;
                        font-size: 1rem;
                  }

                  .columns-img-div {
                        display: flex;
                        align-items: center;
                  }

                  #columns-img {
                        height: 25px;
                        width: 25px;
                  }
            `
      },
      "Tick box grid":{
            html:`
                  <div class="tick-box-grid">
                        <div class="inner-tick-box-grid">
                              <div class="rows">
                                    <div class="rows-text txt">Rows</div>
                                    <div class="row1">
                                    <div>1.</div>
                                    <div class="rowInput-div rd">
                                          <input type="text" id="rowInput" placeholder="Row 1">
                                    </div>
                                    </div>
                                    <div class="row2">
                                    <div>2.</div>
                                    <div>
                                          <button class="add-row-btn add">Add row</button>
                                    </div>
                                    </div>
                              </div>
                              <div class="columns">
                                    <div class="columns-text txt">Columns</div>
                                    <div class="columns1">
                                    <div class="columns-img-div">
                                          <img id="columns-img" src="images/check_box.png" alt="">
                                    </div>
                                    <div class="columnInput-div rd">
                                          <input type="text" id="columnInput" placeholder="Column 1">
                                    </div>
                                    </div>
                                    <div class="columns2">
                                    <div class="columns-img-div">
                                          <img id="columns-img" src="images/check_box.png" alt="">
                                    </div>
                                    <div>
                                          <button class="add-column-btn add">Add column</button>
                                    </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            `,
            css:`
                  .inner-tick-box-grid {
                        display: flex;
                        margin: 0 30px;
                  }

                  .rows, .columns {
                        width: 50%;
                  }

                  .row1, .row2, .columns1, .columns2 {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        font-size: 1rem;
                        padding: 10px 0;
                  }

                  .rd {
                        width: 80%;
                  }

                  #rowInput, #columnInput {
                        outline: none;
                        border: none;
                        width: 100%;
                        padding: 8px 0;
                        font-size: 1rem;
                  }

                  #rowInput::placeholder, #columnInput::placeholder {
                        font-size: 1rem;
                  }

                  .add {
                        border: none;
                        background-color: transparent;
                        font-size: 1rem;
                        color: grey;
                        border-bottom: 1px solid transparent;
                  }

                  .add:hover {
                        border-bottom: 2px solid rgb(194, 191, 191);
                  }

                  .txt {
                        padding-top: 20px;
                        font-size: 1rem;
                  }

                  .columns-img-div {
                        display: flex;
                        align-items: center;
                  }

                  #columns-img {
                        height: 25px;
                        width: 25px;
                  } 
            `
      },
      "Date":{
            html:`
                  <div class="date">
                        <div class="date-div">
                              <div class="dmy">Day, month, year</div>
                              <div>
                                    <img src="images/date.png" id="d" alt="Date icon">
                              </div>
                        </div>
                  </div>

            `,
            css:`
                  .date {
                        padding: 15px 0;
                  }

                  .date-div {
                        display: flex;
                        padding: 10px 0;
                        margin: 0 30px;
                        gap: 10px;
                        align-items: center;
                        width: fit-content;
                        border-bottom: 1px solid rgb(202, 201, 201);
                  }

                  .dmy {
                        padding: 5px 60px 5px 0;
                        font-size: 1rem;
                        color: grey;
                  }

                  #d {
                        height: 25px;
                        width: 25px;
                  }

            `
      },
      "Time":{
            html:`
                  <div class="time">
                        <div class="time-div">
                              <div class="t">Time</div>
                              <div>
                                    <img src="images/time.png" id="time-icon" alt="Time icon">
                              </div>
                        </div>
                  </div>
            `,
            css:`
                  .time {
                        padding: 15px 0;
                  }

                  .time-div {
                        display: flex;
                        padding: 10px 0;
                        margin: 0 30px;
                        gap: 10px;
                        align-items: center;
                        width: fit-content;
                        border-bottom: 1px solid rgb(202, 201, 201);
                  }

                  .t {
                        padding: 5px 160px 5px 0;
                        font-size: 1rem;
                        color: grey;
                  }

                  #time-icon {
                        height: 25px;
                        width: 25px;
                  }
           `
      }
  };

const unfocusedDivData = {
      "Short answer": {
            html: `
                  <div class="short-answer-unfocused unf-df-n">
                  <div class="d-img-unf-div"><img class="d-img-unf" src="images/drag_indicator.png" alt="Drag indicator"></div>
                        <div class="q-div-unfocused">Question</div>
                        <div class="input-container">
                              <div class="input-container-div">
                                    <div class="i-b-unfocused-div dotted-line"><input class="i-b-unfocused" type="text" placeholder="Short answer text"></div>
                              </div>
                        </div>
                  </div>
                  `,
            css: 
            `
                  .short-answer-unfocused {
                        display: flex;
                        flex-direction: column;
                        background-color: white;
                        border-radius: 8px;
                  }

                  .d-img-unf-div {
                        display: flex;
                        justify-content: center;
                  }
                  .d-img-unf {
                        height: 25px;
                        width: 25px;
                        opacity: 0;
                  }
                  .short-answer-unfocused:hover .d-img-unf{
                        opacity: 1;
                  }

                  .q-div-unfocused {
                        margin: 0px 30px 25px 30px;
                  }
                  .input-container {
                        margin: 0px 0px 35px 0px;
                  }
                  .input-container-div {
                        align-items: center;
                        margin: 0px 30px;
                        padding: 10px 0px;
                  }
                  .i-b-unfocused {
                        border: none;
                        outline: none;
                        background-color: transparent;
                        padding-bottom: 5px;
                  }
                  .i-b-unfocused::placeholder {
                        color: black;
                        font-size: 1rem;
                  }
                  .dotted-line {
                        width: 50%;
                        border: none;
                        border-bottom: 1px dotted rgb(205, 205, 205);
                  }
                  .i-b-unfocused-div {
                        margin: 0px 30px 0px 0px;
                  }
            `
      },
      "Paragraph":{
            html:`
                  <div class="paragraph-unfocused unf-df-n">
                        <div class="d-img-unf-div"><img class="d-img-unf" src="images/drag_indicator.png" alt="Drag indicator"></div>
                        <div class="q-div-unfocused">Question</div>
                        <div class="input-container">
                              <div class="input-container-div dotted-line2">
                              <div class="i-b-unfocused-div"><input class="i-b-unfocused" type="text" placeholder="Long answer text"></div>
                              </div>
                        </div>
                  </div>
            `,
            css:`
                  .paragraph-unfocused{
                        display: flex;
                        flex-direction: column;
                        background-color: white;
                        border-radius: 8px;
                  }
                  .d-img-unf-div {
                        display: flex;
                        justify-content: center;
                  }
                  .d-img-unf {
                        height: 25px;
                        width: 25px;
                        opacity: 0;
                  }
                  .paragraph-unfocused:hover .d-img-unf{
                        opacity: 1;
                  }
                  .q-div-unfocused {
                        margin: 0px 30px 25px 30px;
                  }
                  .input-container {
                        margin: 0px 0px 35px 0px;
                  }
                  .input-container-div {
                        align-items: center;
                        margin: 0px 30px;
                        padding: 10px 0px;
                  }
                  .i-b-unfocused {
                        border: none;
                        outline: none;
                        background-color: transparent;
                        padding-bottom: 5px;
                  }
                  .i-b-unfocused::placeholder {
                        color: black;
                        font-size: 1rem;
                  }
                  .dotted-line2{
                        width: 70%;
                        border: none;
                        border-bottom: 1px dotted rgb(179, 178, 178);
                  }
                  .i-b-unfocused-div {
                        margin: 0px 30px 0px 0px;
                  }
                  .c-b-unfocused{
                        height: 25px;
                        width: 25px;
                  }
            `
      },
      "Multiple choice":{
            html:`
                  <div class="multiple-choice-unfocused unf-df-n">
                        <div class="d-img-unf-div"><img class="d-img-unf" src="images/drag_indicator.png" alt="Drag indicator"></div>
                        <div class="q-div-unfocused">Question</div>
                        <div class="input-container">
                              <div class="input-container-div">
                              <div><img class="c-b-unfocused" src="images/radio-circle.png" alt="Radio option"></div>
                              <div class="i-b-unfocused-div"><input class="i-b-unfocused" type="text" placeholder="Option 1"></div>
                              </div>
                        </div>
                  </div>
            `,
            css:`
                  .multiple-choice-unfocused{
                        display: flex;
                        flex-direction: column;
                        background-color: white;
                        border-radius: 8px;
                  }
                  .c-b-unfocused{
                        height: 25px;
                        width: 25px;
                  }
                  .d-img-unf-div {
                        display: flex;
                        justify-content: center;
                  }
                  .d-img-unf{
                        height: 25px;
                        width: 25px;
                        opacity: 0;
                  }
                  .multiple-choice-unfocused:hover .d-img-unf{
                        opacity: 1;
                  }
                  .q-div-unfocused {
                        margin: 0px 30px 15px 30px;
                  }
                  .input-container {
                        margin: 0px 0px 20px 0px;
                  }
                  .input-container-div {
                        display: flex;
                        align-items: center;
                        margin: 0px 30px;
                        padding: 10px 0px;
                  }
                  .i-b-unfocused-div {
                        margin: 0px 30px 0px 0px;
                  }
                  .i-b-unfocused {
                        border: none;
                        outline: none;
                        background-color: transparent;
                        padding-bottom: 5px;
                  }
                  .i-b-unfocused::placeholder {
                        color: black;
                        font-size: 1rem;
                  }
            `
      },
      "Checkboxes":{
            html:`
                 <div class="checkboxes-unfocused unf-df-n">
                        <div class="d-img-unf-div"><img class="d-img-unf" src="images/drag_indicator.png" alt="Drag indicator"></div>
                        <div class="q-div-unfocused">Question</div>
                        <div class="input-container">
                              <div class="input-container-div">
                              <div><img class="c-b-unfocused" src="images/check_box.png" alt="Checkbox option"></div>
                              <div class="i-b-unfocused-div"><input class="i-b-unfocused" type="text" placeholder="Option 1"></div>
                              </div>
                        </div>
                   </div> 
            `,
            css:`
                  .checkboxes-unfocused{
                        display: flex;
                        flex-direction: column;
                        background-color: white;
                        border-radius: 8px;
                  }
                  .c-b-unfocused{
                        height: 25px;
                        width: 25px;
                  }
                  .d-img-unf-div {
                        display: flex;
                        justify-content: center;
                  }
                  .d-img-unf{
                        height: 25px;
                        width: 25px;
                        opacity: 0;
                  }
                  .checkboxes-unfocused:hover .d-img-unf{
                        opacity: 1;
                  }
                  .q-div-unfocused {
                        margin: 0px 30px 15px 30px;
                  }
                  .input-container {
                        margin: 0px 0px 20px 0px;
                  }
                  .input-container-div {
                        display: flex;
                        align-items: center;
                        margin: 0px 30px;
                        padding: 10px 0px;
                  }
                  .i-b-unfocused-div {
                        margin: 0px 30px 0px 0px;
                  }
                  .i-b-unfocused {
                        border: none;
                        outline: none;
                        background-color: transparent;
                        padding-bottom: 5px;
                  }
                  .i-b-unfocused::placeholder {
                        color: black;
                        font-size: 1rem;
                  }
            `
      },
      "Drop-down":{
            html:`
                  <div class="dropdown-unfocused unf-df-n">
                        <div class="d-img-unf-div"><img class="d-img-unf" src="images/drag_indicator.png" alt="Drag indicator"></div>
                        <div class="q-div-unfocused">Question</div>
                        <div class="input-container">
                              <div class="input-container-div">
                              <div>1.</div>
                              <div class="i-b-unfocused-div"><input class="i-b-unfocused" type="text" placeholder="Option 1"></div>
                              </div>
                        </div>
                  </div>
            `,
            css:`
                  .dropdown-unfocused{
                        display: flex;
                        flex-direction: column;
                        background-color: white;
                        border-radius: 8px;
                  }
                  .d-img-unf-div {
                        display: flex;
                        justify-content: center;
                  }
                  .d-img-unf{
                        height: 25px;
                        width: 25px;
                        opacity: 0;
                  }
                  .dropdown-unfocused:hover .d-img-unf{
                        opacity: 1;
                  }
                  .q-div-unfocused {
                        margin: 0px 30px 15px 30px;
                  }
                  .input-container {
                        margin: 0px 0px 20px 0px;
                  }
                  .input-container-div {
                        display: flex;
                        align-items: center;
                        margin: 0px 30px;
                        padding: 10px 0px;
                  }
                  .i-b-unfocused-div {
                        margin: 0px 30px 0px 0px;
                  }
                  .i-b-unfocused {
                        border: none;
                        outline: none;
                        background-color: transparent;
                        padding-bottom: 5px;
                  }
                  .i-b-unfocused::placeholder {
                        color: black;
                        font-size: 1rem;
                  }
            `
      },
      "File upload":{
            html:`
                  <div class="file-upload-unfocused unf-df-n">
                        <div class="d-img-unf-div"><img class="d-img-unf" src="images/drag_indicator.png" alt="Drag indicator"></div>
                        <div class="file-upload-box">
                              <div class="file-top-layer">
                              Let respondents upload files to Drive
                              </div>
                              <div class="paragraph-section">
                              Files will be uploaded to the form owner's Google Drive. Respondents will be required to sign in to Google when file upload questions are added to a form. Please only share this form with people you trust.
                              </div>
                              <div class="button-section">
                              <div><button>Cancel</button></div>
                              <div><button>Continue</button></div>
                              </div>
                        </div>
                  </div>
            `,
            css:`
                  .file-upload-unfocused{
                        display: flex;
                        flex-direction: column;
                        background-color: white;
                        border-radius: 8px;
                  }
                  .q-div-unfocused {
                        margin: 0px 30px 25px 30px;
                  }
                  .d-img-unf-div{
                        display:flex;
                        align-items:center;
                        justify-content:center;
                  }
                  .d-img-unf{
                        height: 25px;
                        width: 25px;
                        opacity: 0;
                  }
                  .file-upload-unfocused:hover .d-img-unf{
                        opacity: 1;
                  }
                  .button-section{
                        display: flex;
                        align-items: center;
                        justify-content: end;
                  }
                  .button-section>div>button{
                        background-color: transparent;
                        border: none;
                        font-size: 1rem;
                        color: grey;
                        padding: 10px 8px;
                        border-radius: 4px;
                  }
                  .button-section>div>button:hover{
                        background-color: rgb(242, 241, 241);
                  }
                  .file-upload-box{
                        margin: 10px 30px 30px 03px ;
                  }
                  .file-top-layer{
                        font-size: 1.3rem;
                        font-weight: 400;
                  }
                  .paragraph-section{
                        padding: 20px 0px 20px 30px;
                        font-size: .9rem;
                  }


            `
      },
      "Linear scale":{
            html:`
                  <div class="linear-scale-unfocused unf-df-n">
                        <div class="d-img-unf-div"><img class="d-img-unf" src="images/drag_indicator.png" alt="Drag indicator"></div>
                        <div class="q-div-unfocused">Question</div>
                        <div class="lsuf-container">
                              <div>
                                    <div class="emty"></div>
                                    <div class="minus">
                                          <div class="blue-line"></div>
                                    </div>
                              </div>
                              <div>
                              <div class="num-div">1</div>
                                    <div>
                                          <div class="radio-img-div">
                                                <img id="lsuf-img" src="images/radio-circle.png" alt="Radio option">
                                          </div>
                                    </div>
                              </div>
                              <div>
                              <div class="num-div">2</div>
                                    <div>
                                          <div class="radio-img-div">
                                                <img id="lsuf-img" src="images/radio-circle.png" alt="Radio option">
                                          </div>
                                    </div>
                              </div>
                              <div>
                              <div class="num-div">3</div>
                                    <div>
                                          <div class="radio-img-div">
                                                <img id="lsuf-img" src="images/radio-circle.png" alt="Radio option">
                                          </div>
                                    </div>
                              </div>
                              <div>
                              <div class="num-div">4</div>
                                    <div>
                                          <div class="radio-img-div">
                                                <img id="lsuf-img" src="images/radio-circle.png" alt="Radio option">
                                          </div>
                                    </div>
                              </div>
                              <div>
                              <div class="num-div">5</div>
                                    <div>
                                          <div class="radio-img-div">
                                                <img id="lsuf-img" src="images/radio-circle.png" alt="Radio option">
                                          </div>
                                    </div>
                              </div>
                              <div>
                                    <div class="emty"></div>
                                    <div class="minus">
                                          <div class="blue-line"></div>
                                    </div>
                              </div>
                        </div>
                  </div>



            `,
            css:`
                  .d-img-unf-div{
                        display:flex;
                        align-items:center;
                        justify-content:center;
                  }
                  .d-img-unf{
                        height: 25px;
                        width: 25px;
                        opacity: 0;
                  }
                  .q-div-unfocused {
                        margin: 0px 30px 15px 30px;
                  }
                  .linear-scale-unfocused{
                        display: flex;
                        flex-direction: column;
                        background-color: white;
                        border-radius: 8px;
                  }
                  .linear-scale-unfocused:hover .d-img-unf{
                        opacity: 1;
                  }
                  .lsuf-container{
                        margin: 20px 0px 20px 30px;
                        display: flex;
                  }
                  #lsuf-img{
                        height: 25px;
                        width: 25px;
                  }
                  .minus{
                        padding: 25px 40px ;
                  }

                  .blue-line{
                        background-color: blue;
                        width: 15px;
                        height: 2px;
                  }

                  .num-div{
                        padding: 15px 40px;
                  }

                  .radio-img-div{
                        display: flex;
                        align-items: center;
                        padding: 15px 40px;
                  }

                  .emty{
                        padding: 24px 30px;
                  }
            `
      },
      "Multiple-choice grid":{
            html:`
                  <div class="multiple-choice-grid-unfocused unf-df-n">
                        <div class="d-img-unf-div"><img class="d-img-unf" src="images/drag_indicator.png" alt="Drag indicator"></div>
                        <div class="q-div-unfocused">Question</div>
                        <div class="mcguf-container">
                              <div class="mcguf-row-section">
                                    <div></div>
                                    <div class="mcguf-img-section">Column 1</div>
                              </div>
                              <div class="mcguf-row-section">
                                    <div>Row 1</div>
                                    <div class="mcguf-img-section">
                                          <span><img id="lsuf-img" src="images/radio-circle.png" alt="Radio option"></span>
                                    </div>
                              </div>
                        </div>
                  </div>
            `,
            css:`

                  .d-img-unf-div{
                        display:flex;
                        align-items:center;
                        justify-content:center;
                  }
                  .d-img-unf{
                        height: 25px;
                        width: 25px;
                        opacity: 0;
                  }
                  .q-div-unfocused {
                        margin: 0px 30px 15px 30px;
                  }

                  #lsuf-img{
                        height:25px;
                        width:25px;
                  }
                  .multiple-choice-grid-unfocused{
                        display: flex;
                        flex-direction: column;
                        background-color: white;
                        border-radius: 8px;
                  }    
                  .multiple-choice-grid-unfocused:hover .d-img-unf{
                        opacity: 1;
                  } 
                  .mcguf-container{
                        margin: 0px 20px 0px 40px;
                  }
                  .mcguf-container>div{
                        width: 100%;
                  }
                  .mcguf-container>div>div{
                        width: 50%;
                        padding: 20px 0px;
                  }

                  .mcguf-row-section{
                        display: flex
                  }
                  .mcguf-img-section{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                  }


            `
      },
      "Tick box grid":{
            html:`
                    <div class="tick-box-grid-unfocused unf-df-n">
                        <div class="d-img-unf-div"><img class="d-img-unf" src="images/drag_indicator.png" alt="Drag indicator"></div>
                        <div class="q-div-unfocused">Question</div>
                        <div class="mcguf-container">
                              <div class="mcguf-row-section">
                                    <div></div>
                                    <div class="mcguf-img-section">Column 1</div>
                              </div>
                              <div class="mcguf-row-section">
                                    <div>Row 1</div>
                                    <div class="mcguf-img-section">
                                          <span><img id="lsuf-img" src="images/check_box.png" alt="Checkbox option"></span>
                                    </div>
                              </div>
                        </div>
                  </div>  
            `,
            css:`
                  .d-img-unf-div{
                        display:flex;
                        align-items:center;
                        justify-content:center;
                  }
                  .d-img-unf{
                        height: 25px;
                        width: 25px;
                        opacity: 0;
                  }
                  .q-div-unfocused {
                        margin: 0px 30px 15px 30px;
                  }
                  .tick-box-grid-unfocused{
                        display: flex;
                        flex-direction: column;
                        background-color: white;
                        border-radius: 8px;
                  }  
                  .tick-box-grid-unfocused:hover .d-img-unf{
                        opacity: 1;
                  }  
                  .mcguf-container{
                        margin: 0px 20px 0px 40px;
                  }
                  .mcguf-container>div{
                        width: 100%;
                  }
                  .mcguf-container>div>div{
                        width: 50%;
                        padding: 20px 0px;
                  }
                  #lsuf-img{
                        height:25px;
                        width:25px;
                  }
                  .mcguf-row-section{
                        display: flex
                  }
                  .mcguf-img-section{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                  }
            `
      },
      "Date":{
            html:`
                  <div class="date-unfocused unf-df-n">
                        <div class="d-img-unf-div"><img class="d-img-unf" src="images/drag_indicator.png" alt="Drag indicator"></div>
                        <div class="q-div-unfocused">Question</div>
                        <div class="duf-container">
                              <div class="duf-div">
                                    Month, day, year
                                    <span><img id="lsuf-img" src="images/date.png" alt="Date icon"></span>
                              </div>
                        </div>
                  </div>
            `,
            css:`
                  .date-unfocused{
                        display: flex;
                        flex-direction: column;
                        background-color: white;
                        border-radius: 8px;
                  }
                  .d-img-unf-div{
                        display:flex;
                        align-items:center;
                        justify-content:center;
                  }
                  .d-img-unf{
                        height: 25px;
                        width: 25px;
                        opacity: 0;
                  }
                  .q-div-unfocused {
                        margin: 0px 30px 25px 30px;
                  }
                  
                  #lsuf-img{
                        height: 25px;
                        width: 25px;
                        opacity: .6;
                  }

                  .date-unfocused:hover .d-img-unf{
                        opacity: 1;
                  }

                  .duf-container{
                        margin: 0px 30px 40px 30px;

                  }
                  .duf-div{
                        display: flex;
                        align-items: center;
                        color: grey;
                  }

                  .duf-div>span{
                        padding-left: 60px;
                  }
            `
      },
      "Time":{
            html:`
                  <div class="time-unfocused unf-df-n">
                        <div class="d-img-unf-div"><img class="d-img-unf" src="images/drag_indicator.png" alt="Drag indicator"></div>
                        <div class="q-div-unfocused">Question</div>
                        <div class="duf-container">
                              <div class="duf-div">
                                    Time
                                    <span><img id="lsuf-img" src="images/time.png" alt="Time icon"></span>
                              </div>
                        </div>
                  </div>
            `,
            css:`
                  .d-img-unf-div{
                        display:flex;
                        align-items:center;
                        justify-content:center;
                  }
                  .d-img-unf{
                        height: 25px;
                        width: 25px;
                        opacity: 0;
                  }
                  .q-div-unfocused {
                        margin: 0px 30px 25px 30px;
                  }
                  .time-unfocused{
                        display: flex;
                        flex-direction: column;
                        background-color: white;
                        border-radius: 8px;
                  }
                  .time-unfocused:hover .d-img-unf{
                        opacity: 1;
                  }

                  #lsuf-img{
                        height: 25px;
                        width: 25px;
                        opacity: .6;
                  }
                  .duf-container{
                        margin: 5px 30px 40px 30px;

                  }
                  .duf-div{
                        display: flex;
                        align-items: center;
                        color: grey;
                  }

                  .duf-div>span{
                        padding-left: 160px;
                  }
            `
      },
  };

const mainDivData={
      html:`
            <div class="focusable focusDiv qtypeDiv"tabindex="0">
                  <div class="drag-indicator blur" ><img id="IMG"src="images/drag_indicator.png" alt=""></div>
                  <div class="input-button-section blur">
                        <div class="input-box4-section" id="wrapper4">
                              <div class="input-section"><input class="input-box4" id="myInput4"type="text" placeholder="Question"></div>
                              <div class="input-section-related"id="input-box4-related">
                                    <div class="hidden-menu-button-container">
                                          <button class="hidden-menu-button">
                                          <span><img id="hidden" src="images/bold.png" alt=""></span>
                                          </button>
                                          <span class="hidden-text-hover">Bold</span>
                                    </div>
                                    <div class="hidden-menu-button-container">
                                          <button class="hidden-menu-button">
                                          <span><img id="hidden"src="images/format_italic.png" alt=""></span>
                                          </button>
                                          <span class="hidden-text-hover">Italic</span>
                                    </div>
                                    <div class="hidden-menu-button-container">
                                          <button class="hidden-menu-button">
                                          <span><img id="hidden"src="images/format_underlined.png" alt=""></span>
                                          </button>
                                          <span class="hidden-text-hover">Underline</span>
                                    </div>
                                    <div  class="hidden-menu-button-container">
                                          <button class="hidden-menu-button">
                                          <span><img id="hidden"src="images/attach_file.png" alt=""></span>
                                          </button>
                                          <span class="hidden-text-hover">Share</span>
                                    </div>
                                    <div class="hidden-menu-button-container">
                                          <button class="hidden-menu-button">
                                          <span><img id="hidden"src="images/formate-clear.png" alt=""></span>
                                          </button>
                                          <span class="hidden-text-hover">Remove formating</span>
                                    </div>
                              </div>
                        </div>
                        <div class="image-button-container win-btn">
                              <button class="image-button">
                              <img id="IMG"src="images/image.png" alt="">
                              </button>
                        </div>
                        <div class="dropdown">
                              <div><button class="dropdown-button" >Select an Item <span class="arrow">▼</span></button></div>
                              <div class="dropdown-content">
                                    <button class="DPBTN"id="short_text_btn"><span><img class="icon"src="images/short_text.png" alt="">Short answer</span></button>
                                    <button class="DPBTN"id="paragraph_btn"><span><img class="icon"src="images/paragraph.png" alt="">Paragraph</span></button>
                                    <hr>
                                    <button class="DPBTN"id="multiple_choice_btn"><span><img class="icon" src="images/radio_button.png" alt="">Multiple choice</span></button>
                                    <button class="DPBTN"id="checkbox_btn"><span><img class="icon"src="images/checkbox.png" alt="">Checkboxes</span></button>
                                    <button class="DPBTN"id="drop_down_btn"><span><img class="icon"src="images/arrow_drop_down.png" alt="">Drop-down</span></button>
                                    <hr>
                                    <button class="DPBTN"id="file_upload_btn"><span><img class="icon"src="images/cloud_upload.png" alt="">File upload</span></button>
                                    <hr>
                                    <button class="DPBTN"id="linear_scale_btn"><span><img class="icon"src="images/linear_scale.png" alt="">Linear scale</span></button>
                                    <button class="DPBTN"id="multiple_choice_grid_btn"><span><img class="icon"src="images/multiple_choice_grid.png" alt="">Multiple-choice grid</span></button>
                                    <button class="DPBTN"id="tick_box_grid_btn"><span><img class="icon"src="images/grid_on.png" alt="">Tick box grid</span></button>
                                    <hr>
                                    <button class="DPBTN"id="date_btn"><span><img class="icon"src="images/date.png" alt="">Date</span></button>
                                    <button class="DPBTN"id="time_btn"><span><img class="icon"src="images/time.png" alt="">Time</span></button>
                              </div>
                        </div>
                  </div>   
                  <div class="focusedScreen">
                  </div>                              
                  <hr class="last-div-hr blur">
                  <div class="last-section blur">
                        <div class="menu-button-container">
                              <button class="menu-button console">
                              <span><img id="IMG"src="images/file_copy.png" alt=""></span>
                              </button>
                              <span class="hover-text">Duplicate</span>
                        </div>
                        <div class="menu-button-container">
                              <button class="menu-button removeButton">
                              <span><img id="IMG"src="images/delete.png" alt=""></span>
                              </button>
                              <span class="hover-text">Delete</span>
                        </div>
                        <div class="hr"><hr></div>
                        <div class="req-toggle">
                              <div class="re-text">Required</div>
                              <div class="switch-div">
                                    <label class="switch">
                                          <input type="checkbox">
                                          <span class="slider"></span>
                                    </label>
                              </div>
                        </div>
                        <div class="menu-button-container">
                              <button class="menu-button">
                              <span><img id="IMG"src="images/menu.png" alt=""></span>
                              </button>
                              <span class="hover-text">Menu</span>
                        </div>
                  </div>   
            </div> 

      `
}
const divTemplate={
      html:`
            <div class="focusable-content">
                  <div class="drag-indicator" ><img id="IMG"src="images/drag_indicator.png" alt=""></div>
                  <div class="input-button-section">
                        <div class="input-box4-section" id="wrapper4">
                              <div class="input-section"><input class="input-box4" id="myInput4"type="text" placeholder="Question"></div>
                              <div class="input-section-related"id="input-box4-related">
                                    <div class="hidden-menu-button-container">
                                          <button class="hidden-menu-button">
                                          <span><img id="hidden" src="images/bold.png" alt=""></span>
                                          </button>
                                          <span class="hidden-text-hover">Bold</span>
                                    </div>
                                    <div class="hidden-menu-button-container">
                                          <button class="hidden-menu-button">
                                          <span><img id="hidden"src="images/format_italic.png" alt=""></span>
                                          </button>
                                          <span class="hidden-text-hover">Italic</span>
                                    </div>
                                    <div class="hidden-menu-button-container">
                                          <button class="hidden-menu-button">
                                          <span><img id="hidden"src="images/format_underlined.png" alt=""></span>
                                          </button>
                                          <span class="hidden-text-hover">Underline</span>
                                    </div>
                                    <div  class="hidden-menu-button-container">
                                          <button class="hidden-menu-button">
                                          <span><img id="hidden"src="images/attach_file.png" alt=""></span>
                                          </button>
                                          <span class="hidden-text-hover">Share</span>
                                    </div>
                                    <div class="hidden-menu-button-container">
                                          <button class="hidden-menu-button">
                                          <span><img id="hidden"src="images/formate-clear.png" alt=""></span>
                                          </button>
                                          <span class="hidden-text-hover">Remove formating</span>
                                    </div>
                              </div>
                        </div>
                        <div class="image-button-container win-btn">
                              <button class="image-button">
                              <img id="IMG"src="images/image.png" alt="">
                              </button>
                        </div>
                        <div class="dropdown">
                              <div><button class="dropdown-button" >Select an Item <span class="arrow">▼</span></button></div>
                              <div class="dropdown-content">
                                    <button class="DPBTN"id="short_text_btn"><span><img class="icon"src="images/short_text.png" alt="">Short answer</span></button>
                                    <button class="DPBTN"id="paragraph_btn"><span><img class="icon"src="images/paragraph.png" alt="">Paragraph</span></button>
                                    <hr>
                                    <button class="DPBTN"id="multiple_choice_btn"><span><img class="icon" src="images/radio_button.png" alt="">Multiple choice</span></button>
                                    <button class="DPBTN"id="checkbox_btn"><span><img class="icon"src="images/checkbox.png" alt="">Checkboxes</span></button>
                                    <button class="DPBTN"id="drop_down_btn"><span><img class="icon"src="images/arrow_drop_down.png" alt="">Drop-down</span></button>
                                    <hr>
                                    <button class="DPBTN"id="file_upload_btn"><span><img class="icon"src="images/cloud_upload.png" alt="">File upload</span></button>
                                    <hr>
                                    <button class="DPBTN"id="linear_scale_btn"><span><img class="icon"src="images/linear_scale.png" alt="">Linear scale</span></button>
                                    <button class="DPBTN"id="multiple_choice_grid_btn"><span><img class="icon"src="images/multiple_choice_grid.png" alt="">Multiple-choice grid</span></button>
                                    <button class="DPBTN"id="tick_box_grid_btn"><span><img class="icon"src="images/grid_on.png" alt="">Tick box grid</span></button>
                                    <hr>
                                    <button class="DPBTN"id="date_btn"><span><img class="icon"src="images/date.png" alt="">Date</span></button>
                                    <button class="DPBTN"id="time_btn"><span><img class="icon"src="images/time.png" alt="">Time</span></button>
                              </div>
                        </div>
                  </div>   
                  <div class="focusedScreen">
                  </div>                              
                  <hr class="last-div-hr">
                  <div class="last-section">
                        <div class="menu-button-container">
                              <button class="menu-button console">
                              <span><img id="IMG"src="images/file_copy.png" alt=""></span>
                              </button>
                              <span class="hover-text">Duplicate</span>
                        </div>
                        <div class="menu-button-container">
                              <button class="menu-button removeButton">
                              <span><img id="IMG"src="images/delete.png" alt=""></span>
                              </button>
                              <span class="hover-text">Delete</span>
                        </div>
                        <div class="hr"><hr></div>
                        <div class="req-toggle">
                              <div class="re-text">Required</div>
                              <div class="switch-div">
                                    <label class="switch">
                                          <input type="checkbox">
                                          <span class="slider"></span>
                                    </label>
                              </div>
                        </div>
                        <div class="menu-button-container">
                              <button class="menu-button">
                              <span><img id="IMG"src="images/menu.png" alt=""></span>
                              </button>
                              <span class="hover-text">Menu</span>
                        </div>
                  </div> 
            </div>    
      `
}