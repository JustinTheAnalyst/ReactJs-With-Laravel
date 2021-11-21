class AppUrl {

    static BaseURL = 'http://127.0.0.1:8000/api';
    // static BaseURL = 'https://rapi.nzclevercoder.com/api';

    static HomeTopTitle = this.BaseURL+'/homepage/title';
    static HomeTechDesc = this.BaseURL+'/techhome';
    static TotalHomeDetails = this.BaseURL+'/totalhome';
    static HomeVideo = this.BaseURL+'/home/video';

    static ProjectDetails = this.BaseURL+'/projectdetails/';
    static ProjectAll = this.BaseURL+'/projects';
    static ProjectHome = this.BaseURL+'/recent3rojects';
    static ProjectActive = this.BaseURL+'/activeprojects';
    
    static Services = this.BaseURL+'/services';

    static Information = this.BaseURL+'/information';

    static FooterData = this.BaseURL+'/footerdata';

    static CourseDetails = this.BaseURL+'/coursedetails';
    static CourseAll = this.BaseURL+'/courseall';
    static CourseHome = this.BaseURL+'/coursehome';

    static ContactSend = this.BaseURL+'/contactsend';

    static ClientView = this.BaseURL+'/clientreview';

    static ChartData = this.BaseURL+'/chartdata';
}

export default AppUrl
