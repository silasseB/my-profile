


const InitialState = () => {
  
    return {
        userAuth    : {},
        currentUser : {},
        userProfile : {},
        users       : {},
        index       : {},
        questions   : {},
        posts       : {},
        question    : {},
        post        : {},
        answers     : {},
        comments    : {},
        replies     : {},
        modal       : {},
        errors      : {},
        about       : {},
        admin       : {},
        message     : {},
    };
};


export function entities(state=InitialState(), action) {
   switch (action.type){
       
    }
}