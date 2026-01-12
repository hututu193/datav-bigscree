import './index.scss'

export const Header = () =>{
    return (
    
             <header className="topbar">
            <div className="left">
                <div className="city">LOS ANGELES</div>
                <div className="sub">City Incident Dashboard</div>
            </div>

            <div className="center">
                <div className="title">洛杉矶城市事件监测大屏</div>
                <div className="tag">INCIDENTS · TRENDS · RESPONSE</div>
            </div>

            <div className="right">
                <div>数据口径：Demo Data</div>
                <div>刷新频率：10s</div>
                <div>更新时间：2026-01-11 22:30:00</div>
            </div>
        </header>
       
       

    )
}