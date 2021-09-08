export const _Ckeditor = (Component) => {
    
    return class CkeditorTextArea extends Component {
        constructor(){
            super({
                data:{
                    textarea_id: Math.random().toString(16).substring(2,7) 
                },
                template:(
                    <textarea bind-id="textarea_id" cols="30" rows="10"></textarea>
                ),
                mounted: () => {
                    try {
                        CKEDITOR.replace(this.data.textarea_id, {
                            height: 400,
                            baseFloatZIndex: 1000
                        });
                    } catch (error) {
                        console.error(`CkeditorError => ${error}`);
                    }
                }
            })
        }
    }

}