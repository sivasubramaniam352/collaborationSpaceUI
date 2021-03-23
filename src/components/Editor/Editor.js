import React from 'react'
import { Editor } from "@tinymce/tinymce-react";
const MsgEditor = ({handleEditorChange, value})  => {

  const embed = (editor) => {
    editor.ui.registry.addButton('commentInsertButton', {
      text: `<button aria-label="Insert/comment" title="Insert / Comment" 
      type="button"
       tabindex="-1"
       
        class="MsgSendBtn"
         aria-disabled="false" aria-pressed="false">
          <span class="tox-icon tox-tbtn__icon-wrap">
         <svg width="24" height="24">
         <path fill-rule="nonzero" d="M9 19l3-2h7c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H5a1 1 0 00-1 1v10c0 .6.4 1 1 1h4v2zm-2 4v-4H5a3 3 0 01-3-3V6a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3h-6.4L7 23z"></path>
         </svg></span></button>`,
      onAction: () => {}
      // this.commentIdGen(editor)
    });
    // console.log("VARIABLES", this.props.selectedVariable && this.props.selectedVariable);
    // console.log("nos", this.state.noOfCommentBtns, this.state.noOfclarifyBtns);
    editor.ui.registry.addButton('clarifyInsertButton', {
      text: `<button aria-label="Insert/clarify" title="Insert / Clarify" type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false" aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"><path d="M6 4v17l6-4 6 4V4c0-.6-.4-1-1-1H7a1 1 0 00-1 1z" fill-rule="nonzero"></path></svg></span></button>`,
      onAction: () =>{}
      //  this.uniqIdGen(editor)
    });
  }
    return (
        <div
        style={{
     
        }}
        >
                <Editor 
               
                init = {{
                    selector: "#messageInput",
                    
                    skin: 'naked',
                    icons: 'bootstrap',
                    plugins: "autoresize link lists naked emoticons",
                    autoresize_bottom_margin: 50,
                    autoresize_max_height: 350,
                    autoresize_min_height: 350,
                  
                    autoresize_on_init: false,
                    toolbar:
                      "bold italic underline strikethrough | forecolor | numlist bullist | link blockquote emoticons| autoresize",
                    menubar: false,
                    statusbar: false,
                    width: "100%",
                   custom_ui_selector:'editor',
                    inline_styles:{
                      position:'relative'
                    },
                    toolbar_location: "bottom",
                    autoresize_bottom_margin: 0,
                    contextmenu: false,
                
                    setup: (ed) => {
                      embed(ed)
                    },
                
                
                  }


                  }
                  value={value}
                  onEditorChange={(e) =>
                    handleEditorChange(e)}
                  
                />
        
        </div>    )
}

export default MsgEditor;
