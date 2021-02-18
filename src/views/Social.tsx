import React from 'react'
import { ShareOutline } from 'heroicons-react'

const Social = () => {
  return (
    <div className="lg:pl-2">
      <div className="text-2xl font-bold flex items-center">
        <ShareOutline size={28} className="mr-4" />
        <div>Social</div>
      </div>

      <div className="mt-12 flex flex-wrap -m-1">
        <a className="p-1" href="https://github.com/spencerwooo" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/badge/dynamic/json?logo=github&label=GitHub&labelColor=282c34&color=181717&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dgithub%26queryKey%3Dspencerwooo"
            alt="GitHub"
          />
        </a>
        <a className="p-1" href="https://blog.spencerwoo.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/badge/dynamic/json?label=Feedly%20RSS&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dfeedly%26queryKey%3Dhttps%3A%2F%2Fblog.spencerwoo.com%2Fposts%2Findex.xml&labelColor=2bb24c&logoColor=white&color=282c34&logo=feedly"
            alt="Feedly"
          />
        </a>
        <a className="p-1" href="https://blog.spencerwoo.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/badge/dynamic/json?label=Inoreader%20RSS&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dinoreader%26queryKey%3Dhttps%3A%2F%2Fblog.spencerwoo.com%2Fposts%2Findex.xml&color=282c34&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTM2IDBjMTkuODgyIDAgMzYgMTYuMTE4IDM2IDM2UzU1Ljg4MiA3MiAzNiA3MiAwIDU1Ljg4MiAwIDM2IDE2LjExOCAwIDM2IDB6bS03Ljk5IDMwLjk4QzIwLjgyNSAzMC45OCAxNSAzNi44MDQgMTUgNDMuOTkgMTUgNTEuMTc1IDIwLjgyNSA1NyAyOC4wMSA1N2M3LjE4MyAwIDEzLjAwOS01LjgyNSAxMy4wMDktMTMuMDExIDAtNy4xODUtNS44MjYtMTMuMDA5LTEzLjAwOS0xMy4wMDl6bTMuNjcgNS41NjVhMy43MjcgMy43MjcgMCAxMS0uMDA1IDcuNDU0IDMuNzI3IDMuNzI3IDAgMDEuMDA0LTcuNDU0em0tMy42Ny0xNC43NTh2NC42ODdjOS42NTYgMCAxNy41MTYgNy44NTggMTcuNTE2IDE3LjUxNWg0LjY4OWMwLTEyLjI0Mi05Ljk2MS0yMi4yMDItMjIuMjA1LTIyLjIwMnptMC05Ljc4N3Y0LjY4N2M3LjI5MiAwIDE0LjE0OCAyLjg0IDE5LjMwNiA3Ljk5OCA1LjE1OCA1LjE1NyA3Ljk5NSAxMi4wMTQgNy45OTUgMTkuMzA0SDYwYzAtOC41NDQtMy4zMjgtMTYuNTc3LTkuMzctMjIuNjJDNDQuNTg1IDE1LjMyNiAzNi41NTQgMTIgMjguMDEgMTJ6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=&labelColor=007bc7"
            alt="Inoreader"
          />
        </a>
        <a className="p-1" href="https://t.me/realSpencerWoo" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/badge/dynamic/json?label=@realSpencerWoo&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dtelegram%26queryKey%3DrealSpencerWoo&logo=telegram&color=2CA5E0&labelColor=282c34"
            alt="Telegram"
          />
        </a>
        <a className="p-1" href="https://twitter.com/realSpencerWoo" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/badge/dynamic/json?label=Twitter&labelColor=282c34&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dtwitter%26queryKey%3DrealSpencerWoo&color=1da1f2&logo=twitter"
            alt="Twitter"
          />
        </a>
        <a className="p-1" href="https://weibo.com/spencerwoo" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/badge/dynamic/json?label=Weibo&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dweibo%26queryKey%3D2867502440&labelColor=e71f19&color=040000&logo=sina-weibo"
            alt="Weibo"
          />
        </a>
        <a className="p-1" href="https://steamcommunity.com/id/firebearllc" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/badge/dynamic/json?label=Steam&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3DsteamGames%26queryKey%3D76561198336249957&suffix=%20Games&logo=steam&labelColor=134375&color=0b1a37&"
            alt="Steam Games"
          />
        </a>
        <a className="p-1" href="https://steamcommunity.com/id/firebearllc" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/badge/dynamic/json?label=Steam%20Friends&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3DsteamFriends%26queryKey%3D76561198336249957&logo=steam&color=0b1a37&labelColor=134375"
            alt="Steam Friends"
          />
        </a>
        <a className="p-1" href="https://medium.com/spencerweekly" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/badge/dynamic/json?label=Medium&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dmedium%26queryKey%3D%40SpencerWooo&logo=medium&color=12100E&labelColor=03a87c"
            alt="Medium"
          />
        </a>
        <a className="p-1" href="https://sspai.com/u/spencerwoo/posts" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/badge/dynamic/json?label=SSPAI&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dsspai%26queryKey%3Dspencerwoo&color=d71a1b&logo=data:image/png;base64,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&labelColor=282c34"
            alt="sspai"
          />
        </a>
      </div>

      <div className="mt-2">Kind of a quiet guy on the internet now. Cheers.</div>
    </div>
  )
}

export default Social
