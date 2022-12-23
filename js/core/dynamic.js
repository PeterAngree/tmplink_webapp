/**
 * ワークスペース、ルーム、ダイレクトモジュールの内容を扱うプログラムです。
 * @author CC2655
 * @version 1.0
 * @date 2022/12/23
 */

class dynamic {

    current = null

    active(title) {
        $('.navbar-collapse').collapse('hide');
        // if(this.current!==title){
        //     $('#nav_'+this.current).removeClass('active');
        //     $('#nav_'+title).addClass('active');
        //     this.current=title;
        // }

        //ページスクロール時の自動読み込みをオフにする
        TL.dir_list_autoload_disabled();
        TL.navbar.enabled();
        TL.ready(()=>{
            TL.head_set();
        });
        app.linkRebind();
    }

    ga(target){
        gtag('config', 'UA-96864664-3', {
            'page_title': target,
            'page_location': location.href,
        });
    }

    index() {
        this.ga('Index');
        $('#home_view').html(app.getFile('/tpl/listview/index.html'));
        app.dynOpen('/&listview=index');
        this.active('index');
        TL.navbar.disabled();
        INIT_index();
        TL.languageBtnSet();
        // app.linkRebindWith('div');
    }

    workspace() {
        this.ga('Workspace');
        $('#home_view').html(app.getFile('/tpl/listview/workspace.html'));
        app.dynOpen('/&listview=workspace');
        this.active('workspace');
        INIT_workspace();
        TL.navbar.model_workspace();
    }

    room() {
        this.ga('Desktop');
        $('#home_view').html(app.getFile('/tpl/listview/room.html'));
        // app.dynOpen('/&listview=room');
        this.active('room');
        INIT_room();
        TL.navbar.model_desktop();
    }

    direct() {
        this.ga('Direct');
        $('#home_view').html(app.getFile('/tpl/listview/direct.html'));
        app.dynOpen('/&listview=direct');
        this.active('direct');
        TL.navbar.model_direct();
        INIT_direct();
    }

    login() {
        this.ga('Login');
        $('#home_view').html(app.getFile('/tpl/listview/login.html'));
        app.dynOpen('/&listview=login');
        TL.navbar.disabled();
        INIT_login();
    }
    
    reg() {
        this.ga('Register');
        $('#home_view').html(app.getFile('/tpl/listview/reg.html'));
        app.dynOpen('/&listview=reg');
        TL.navbar.disabled();
        INIT_reg();
    }

    reset() {
        this.ga('Reset');
        $('#home_view').html(app.getFile('/tpl/listview/reset.html'));
        app.dynOpen('/&listview=reset');
        TL.navbar.model_direct();
        INIT_reset();
    }
}