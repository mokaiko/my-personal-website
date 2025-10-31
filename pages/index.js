// pages/index.js
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const [language, setLanguage] = useState("ja");
  const [selectedImage, setSelectedImage] = useState(null); // 新增：控制大图显示

  // 多语言内容
  const content = {
    en: {
      title: "Mo Kaiko's Personal Website",
      name: "Mo Kaiko",
      location: "Shinjuku, Tokyo, Japan",
      position:
        "Blockchain, Web3, Smart Contract, Ethereum, Solidity Developer",
      contact: "Contact",
      certificate: "NFT Certificates",
      viewNFT: "View NFT Details",
      transaction: "Verify Transaction",
      contractAddress: "Contract Address",
      ownerAddress: "Owner",
      network: "Blockchain Network",
      about: "About Me",
      projects: "Projects",
      viewIntrodactionVideo: "View Introduction Video",
      viewProject: "View Project",
      aboutText:
        "Blockchain engineer specializing in Web3, NFT and smart contract development",
      nft_alchemyU_title: "Alchemy University EVM Chain Certification",
      nft_alchemyU_desc: `This NFT certifies that the holder has successfully completed the Alchemy University EVM Chain Certification, demonstrating proficiency in:
      ✓ EVM architecture and fundamentals
      ✓ Smart contract development with Solidity
      ✓ DApp development and deployment
      ✓ Blockchain security best practices
      ✓ Interaction with Ethereum and Layer 2 solutions
      This certification NFT is not only a professional recognition of the holder's developer skills but also a significant milestone for entering the Web3 development field, symbolizing a solid foundation in EVM development and the potential to continually build reliable decentralized applications.`,
      nft_encode_title: "Encode Graduate Certificate",
      nft_encode_desc: `🎓 ETHDenver × Encode Club Solidity Bootcamp Cohort 1 Graduate
Successfully completed the inaugural Solidity development bootcamp (October 2022), demonstrating proficiency in:
✓ Smart contract development & deployment
✓ Advanced Solidity programming
✓ DeFi protocol architecture
✓ Blockchain security best practices
✓ DApp design patterns
This NFT certifies foundational expertise in Web3 development and commemorates participation in the pioneering cohort that helped shape the future of decentralized technology.`,
      nft_10years_title: "Ten Years Of Ethereum",
      nft_10years_desc: `A Decade Forging Legends, Code Transforming the World.
This NFT bears witness to the holder's journey of growth alongside Ethereum, serving as a profound tribute to blockchain pioneers and symbolizing the relentless pursuit of a decentralized future.`,
      project_volcano_title: "Volcano NFT",
      project_volcano_desc: `Issued unique volcano-themed NFTs via a smart contract called VolcanoNFT. 
      Users can mint NFTs with randomly generated color schemes by paying in ETH. 
      Each NFT's image and metadata are stored fully on-chain, ensuring permanent accessibility through Base64 encoding.`,
      project_hashtag_title: "HashTag",
      project_hashtag_desc: `This is a block explorer extension system that targets transaction hashes (txHash) on the Ethereum Mainnet and the Goerli testnet.
      It implements the following features:
・Functionality for users with connected wallets to post explanatory comments on transactions
・Functionality for community members to upvote useful comments
・Automatic retrieval of basic transaction information (timestamp/from/to/data, etc.)
・On-chain management of the rating system using a smart contract`,
      project_cryptotrends_title: "CryptoTrends Indicators",
      project_cryptotrends_desc: `CryptoTrends Indicators is a powerful cryptocurrency analysis tool. 
      It connects to real-time K-line data from major exchanges to perform multi-dimensional technical indicator (e.g., RSI, MACD, Bollinger Bands) calculation and in-depth analysis. 
      The core of the project is its use of various pre-defined trading strategies to intelligently analyze market movements and predict trends for cryptocurrencies.
      It aims to provide traders with data-driven decision support, helping them identify market opportunities.`,
      project_chinese_restaurant_in_tokyo_title:
        "Tokyo Delicious Chinese Cuisine Complete Guide",
      project_chinese_restaurant_in_tokyo_desc: `A guide to delicious Chinese restaurants in Tokyo for Chinese people living in Japan and Japanese people who love authentic Chinese food.
        Built with Next.js and Tailwind CSS, featuring a responsive design.`,
    },
    zh: {
      title: "Mo Kaiko 的个人网站",
      name: "Mo Kaiko",
      location: "日本东京新宿区",
      position: "区块链、Web3、智能合约开发、以太坊、Solidity 工程师",
      contact: "联系方式",
      certificate: "NFT 证书",
      viewNFT: "查看 NFT 详情",
      transaction: "验证交易",
      contractAddress: "合约地址",
      ownerAddress: "持有者",
      network: "区块链网络",
      about: "关于我",
      projects: "项目展示",
      aboutText: "专注于 Web3、NFT、智能合约开发的区块链工程师",
      viewIntrodactionVideo: "查看介绍视频",
      viewProject: "查看项目",
      nft_alchemyU_title: "Alchemy University EVM Chain 认证",
      nft_alchemyU_desc: `此 NFT 证明持有者已成功完成 Alchemy University EVM Chain 开发者认证，展示了以下方面的熟练掌握：
      ✓ EVM 架构与基础
      ✓ 使用 Solidity 进行智能合约开发
      ✓ DApp 开发与部署
      ✓ 区块链安全最佳实践
      ✓ 与以太坊及 Layer 2 解决方案的交互
      本认证 NFT 不仅是对开发者技能的专业认可，也是进入 Web3 开发领域的重要里程碑，象征着扎实的 EVM 开发功底与持续构建可信去中心化应用的潜力。`,
      nft_encode_title: "Encode 毕业证书",
      nft_encode_desc: `🎓 ETHDenver × Encode Club Solidity 训练营第一期毕业认证
成功完成2022年10月首期 intensive Solidity 开发训练营，证明持有者已掌握：
✓ 智能合约开发与部署
✓ Solidity高级编程技巧  
✓ DeFi协议原理与实现
✓ 区块链安全与最佳实践
✓ 去中心化应用架构设计
作为首批毕业生，此 NFT 象征着在 Web3 开发领域的早期领导地位和技术专长，标志着从学习者到建设者的重要转变。`,
      nft_10years_title: "以太坊十周年纪念",
      nft_10years_desc: `十年铸就传奇，代码改变世界。
此NFT见证持有者与以太坊共同成长的旅程，是对区块链先驱者的崇高致敬，象征着对去中心化未来的不懈追求。`,
      project_volcano_title: "火山 NFT",
      project_volcano_desc: `通过 VolcanoNFT 智能合约发行独特的火山主题 NFT。
      用户可以通过支付 ETH 来铸造具有随机生成色彩方案的 NFT。
      每个 NFT 的图像和元数据均完全存储在链上，通过 Base64 编码确保永久访问。`,
      project_hashtag_title: "HashTag",
      project_hashtag_desc: `这是一个面向以太坊主网和 Goerli 测试网的交易哈希（txHash）的区块浏览器扩展系统。
        它实现了以下功能：
        ・连接钱包的用户可以对交易发布解释性评论的功能
        ・社区成员可以对有用评论进行点赞的功能
        ・自动获取基本交易信息（时间戳/发送方/接收方/数据等）
        ・使用智能合约对评分系统进行链上管理`,
      project_cryptotrends_title: "CryptoTrends 指标",
      project_cryptotrends_desc: `CryptoTrends 指标是一个强大的加密货币分析工具。
        它连接到主要交易所的实时 K 线数据，进行多维度技术指标（如 RSI、MACD、布林带）计算和深入分析。
        该项目的核心是利用各种预定义的交易策略，智能分析市场动向并预测加密货币的趋势。
        它旨在为交易者提供数据驱动的决策支持，洞察市场先机。`,
      project_chinese_restaurant_in_tokyo_title: "东京美味中国料理大全",
      project_chinese_restaurant_in_tokyo_desc: `面向在日华人及热爱正宗中餐的日本人，提供东京美味中餐厅指南。
        使用 Next.js 和 Tailwind CSS 构建，采用响应式设计。`,
    },
    ja: {
      title: "Mo Kaiko の個人サイト",
      name: "モウ カイコウ",
      location: "日本東京都新宿区",
      position: "ブロックチェーン・Web3・イーサリアム・Solidity 開発者",
      contact: "連絡先",
      certificate: "NFT 証明書",
      viewNFT: "NFT 詳細を見る",
      transaction: "トランザクションを確認する",
      contractAddress: "コントラクトアドレス",
      ownerAddress: "所有者",
      network: "ブロックチェーンネットワーク",
      about: "自己紹介",
      projects: "プロジェクト",
      aboutText:
        "Web3・NFT・スマートコントラクト開発に特化したブロックチェーンエンジニア",
      viewIntrodactionVideo: "紹介ビデオを見る",
      viewProject: "プロジェクトを見る",
      nft_alchemyU_title: "Alchemy University EVM Chain 認定",
      nft_alchemyU_desc: `この NFT は、保有者が Alchemy University EVM Chain 開発者認定を無事に修了し、以下の分野での習熟度を示していることを証明するものである：
      ✓ EVM のアーキテクチャと基礎
      ✓ Solidity を用いたスマートコントラクト開発
      ✓ DApp の開発とデプロイ
      ✓ ブロックチェーンセキュリティのベストプラクティス
      ✓ イーサリアムおよび Layer 2 ソリューションとのインタラクション
      本認定NFTは、開発者のスキルに対する専門的な認定であるだけでなく、Web3開発分野への参入における重要なマイルストーンであり、確固たるEVM開発の基礎と、信頼性の高い分散型アプリケーションを継続的に構築する可能性を象徴するものである。`,
      nft_encode_title: "Encode グラデュエート証書",
      nft_encode_desc: `ETHDenver × Encode Club Solidity Bootcamp 第一期グラデュエート認定。
先駆的な Solidity 開発ブートキャンプ（2022年10月）を修了したことを証明する。以下における習熟度を示すものである：
✓ スマートコントラクトの開発とデプロイ
✓ 高度な Solidity プログラミング
✓ DeFi プロトコルのアーキテクチャ
✓ ブロックチェーンセキュリティのベストプラクティス
✓ 分散型アプリケーション（DApp）のデザインパターン
この NFT は、Web3 開発における基礎的な専門知識を証明し、分散型技術の未来を形作るのに貢献したパイオニア期の参加を記念するものである。`,
      nft_10years_title: "イーサリアム十周年記念",
      nft_10years_desc: `十年にわたって伝説を築き、コードが世界を変える。
この NFT は、保有者がイーサリアムと共に成長してきた旅路を証するものであり、ブロックチェーンの先駆者たちへの崇高な賛辞である。同時に、分散型未来への不断の追求を象徴する。`,
      project_volcano_title: "火山 NFT",
      project_volcano_desc: `「VolcanoNFT」というスマートコントラクトにより、火山をテーマにした独自の NFT を発行した。
      ユーザーは ETH を支払うことで、ランダムな色合いの火山画像を含む NFT をミント可能である。
      各 NFT の画像とメタデータは完全にオンチェーンで保存され、Base64 エンコードを用いて永続的なアクセスが可能となっている。`,
      project_hashtag_title: "HashTag",
      project_hashtag_desc: `イーサリアムのメインネットおよび Goerli テストネット上のトランザクションハッシュ（txHash）を対象とした、ブロックエクスプローラー拡張システムである。
        以下の機能を実装している：
        ・ウォレットを接続したユーザーがトランザクションに説明コメントを投稿できる機能
        ・コミュニティメンバーが有用なコメントにアップボートできる機能
        ・基本的なトランザクション情報（タイムスタンプ/送信元/送信先/データなど）の自動取得
        ・スマートコントラクトを使用した評価システムのオンチェーン管理`,
      project_cryptotrends_title: "CryptoTrends 指標",
      project_cryptotrends_desc: `CryptoTrends 指標は、強力な暗号通貨分析ツールである。
        主要な取引所からのリアルタイムの K ラインデータに接続し、多次元のテクニカル指標（RSI、MACD、ボリンジャーバンドなど）の計算と詳細な分析を行う。
        このプロジェクトの核心は、さまざまな事前定義された取引戦略を利用して、市場の動向をインテリジェントに分析し、暗号通貨のトレンドを予測することである。
        トレーダーにデータ駆動型の意思決定支援を提供し、市場の機会を見極めるのに役立つことを目的としている。`,
      project_chinese_restaurant_in_tokyo_title: "ぽーたぶる中国料理",
      project_chinese_restaurant_in_tokyo_desc: `在日中国人および本格中華を愛する日本人に向けた、東京の美味しい中国料理店ガイド。
        Next.js と Tailwind CSS を使用して構築されており、レスポンシブデザインを採用している。`,
    },
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Head>
        <title>{currentContent.title}</title>
        <meta name="description" content="Personal Website" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* 大图弹窗 */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Certificate Preview"
              className="rounded-lg shadow-2xl max-w-[90vw] max-h-[80vh] w-full h-auto"
            />
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors "
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <header className="fixed top-0 left-0 w-full bg-blue-800 text-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">
            {currentContent.name}
          </h1>
          <div className="flex space-x-2 bg-blue-700 p-1 rounded-lg">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                language === "en"
                  ? "bg-white text-blue-800 shadow-sm"
                  : "text-blue-100 hover:bg-blue-600 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("zh")}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                language === "zh"
                  ? "bg-white text-blue-800 shadow-sm"
                  : "text-blue-100 hover:bg-blue-600 hover:text-white"
              }`}
            >
              中文
            </button>
            <button
              onClick={() => setLanguage("ja")}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                language === "ja"
                  ? "bg-white text-blue-800 shadow-sm"
                  : "text-blue-100 hover:bg-blue-600 hover:text-white"
              }`}
            >
              日本語
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-10">
        {/* 合并个人信息和关于我部分 */}
        <section className="mb-16">
          {/* 外层容器确保整体居中 */}
          <div className="flex justify-center">
            {/* 使用 flex 布局将头像和所有文字信息并排 */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between max-w-4xl w-full lg:space-x-8">
              {/* 头像容器 (左侧) */}
              <div className="mb-6 lg:mb-0 flex-shrink-0 flex flex-col items-center">
                {/* 头像 - 添加居中样式 */}
                <img
                  src="./me.PNG"
                  alt={currentContent.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg mx-auto mb-6"
                />

                {/* 联系方式区域 - 统一使用GitHub风格 */}
                <div className="flex space-x-4 justify-center">
                  {/* Email */}
                  <a
                    href="mailto:vipmenghaigang@gmail.com"
                    className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors group"
                    aria-label="Email"
                    title="Email"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 group-hover:text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/mokaiko/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors group"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 group-hover:text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/mokaiko/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors group"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 group-hover:text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>

                  {/* Discord */}
                  <a
                    href="https://discord.com/users/782056032867188736"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors group"
                    aria-label="Discord"
                    title="Discord"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 group-hover:text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02C2.44 8.78 1.71 12.23 2.04 15.64c0 .02.01.04.03.05c1.57 1.15 3.1 1.84 4.59 2.3c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.67 1.19 1.07 1.74c.03.01.06.02.09.01c1.5-.46 3.02-1.15 4.59-2.3c.02-.01.03-.03.03-.05c.36-3.68-.59-7.09-2.29-10.29c-.01-.02-.02-.03-.04-.03zm-10.56 8.08c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.58 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* 所有文字信息容器 (右侧) */}
              <div className="text-center lg:text-left flex-1 max-w-2xl">
                {/* 基本信息 */}
                <div className="mb-8">
                  <h2 className="text-4xl font-bold mb-4">
                    {currentContent.name}
                  </h2>

                  <p className="text-lg text-gray-500 mb-6 flex items-center justify-center lg:justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    {currentContent.location}
                  </p>
                  <p className="text-xl text-gray-600 mb-2">
                    {currentContent.position}
                  </p>
                </div>

                {/* 关于我 - 现在移到了这里 */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    {currentContent.aboutTitle}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {currentContent.aboutText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {currentContent.certificate}
          </h2>
          <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow">
            {/* Alchemy University NFT */}
            <div className="flex flex-col md:flex-row items-center gap-20 mb-10">
              <div className="flex-shrink-0">
                {/* 修改：添加点击事件 */}
                <div
                  className="cursor-pointer hover:scale-105 transition-transform duration-200"
                  onClick={() => setSelectedImage("AlchemyU_Certificate.png")}
                >
                  <img
                    src="AlchemyU_Certificate.png"
                    alt="Alchemy University EVM Chain Certification NFT"
                    className="w-48 h-26 rounded-lg object-cover border-2 border-amber-400 shadow-sm"
                  />
                </div>
                <div
                  className="cursor-pointer hover:scale-105 transition-transform duration-200 mt-4"
                  onClick={() =>
                    setSelectedImage(
                      "https://ipfs.io/ipfs/bafybeigm6vb54tn7p3dbiig2mw3dzaejqhn2zy5e3iaww6viuzdtxbcoum"
                    )
                  }
                >
                  <img
                    src="https://ipfs.io/ipfs/bafybeigm6vb54tn7p3dbiig2mw3dzaejqhn2zy5e3iaww6viuzdtxbcoum"
                    alt="Alchemy University EVM Chain Certification NFT"
                    className="w-48 h-48 rounded-lg object-cover border-2 border-amber-400 shadow-sm"
                  />
                </div>
              </div>

              {/* 证书信息保持不变 */}
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {currentContent.nft_alchemyU_title}
                </h3>
                <p className="text-gray-600 mb-4 whitespace-pre-line">
                  {currentContent.nft_alchemyU_desc}
                </p>

                {/* 交互按钮保持不变 */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://opensea.io/item/shape/0xcbe9500ef4f760d05d70381ccdf0169470b137de/23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <span>{currentContent.viewNFT}</span>
                  </a>
                  <a
                    href="https://shapescan.xyz/token/0xCBE9500Ef4F760d05D70381cCDF0169470b137DE/instance/23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <span>{currentContent.transaction}</span>
                  </a>
                </div>

                {/* 链上信息保持不变 */}
                <div className="mt-4 text-sm text-gray-500">
                  <p>{currentContent.ownerAddress}: 0x34F3...3612</p>
                  <p>{currentContent.contractAddress}: 0xCBE95...37DE</p>
                  <p>{currentContent.network}: Shape Network</p>
                </div>
              </div>
            </div>

            {/* Encode Certificate NFT */}
            <div className="flex flex-col md:flex-row items-center gap-20 mb-10">
              <div className="flex-shrink-0">
                {/* 修改：添加点击事件 */}
                <div
                  className="cursor-pointer hover:scale-105 transition-transform duration-200"
                  onClick={() =>
                    setSelectedImage(
                      "https://i2.seadn.io/polygon/0xdbf2138593aec61d55d86e80b8ed86d7b9ba51f5/8516d699437d9155e2639696991b9b/da8516d699437d9155e2639696991b9b.jpeg?w=1000"
                    )
                  }
                >
                  <img
                    src="https://i2.seadn.io/polygon/0xdbf2138593aec61d55d86e80b8ed86d7b9ba51f5/8516d699437d9155e2639696991b9b/da8516d699437d9155e2639696991b9b.jpeg?w=1000"
                    alt="Web3 NFT"
                    className="w-48 h-48 rounded-lg object-cover border-2 border-amber-400 shadow-sm"
                  />
                </div>
              </div>

              {/* 证书信息保持不变 */}
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {currentContent.nft_encode_title}
                </h3>
                <p className="text-gray-600 mb-4 whitespace-pre-line">
                  {currentContent.nft_encode_desc}
                </p>

                {/* 交互按钮保持不变 */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://opensea.io/item/polygon/0xdbf2138593aec61d55d86e80b8ed86d7b9ba51f5/1371"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <span>{currentContent.viewNFT}</span>
                  </a>
                  <a
                    href="https://polygonscan.com/nft/0xdbf2138593aec61d55d86e80b8ed86d7b9ba51f5/1371"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <span>{currentContent.transaction}</span>
                  </a>
                </div>

                {/* 链上信息保持不变 */}
                <div className="mt-4 text-sm text-gray-500">
                  <p>{currentContent.ownerAddress}: 0x34F3...3612</p>
                  <p>{currentContent.contractAddress}: 0xdBf2...51F5</p>
                  <p>{currentContent.network}: Polygon Network</p>
                </div>
              </div>
            </div>

            {/* Ten Years Of Ethereum NFT */}
            <div className="flex flex-col md:flex-row items-center gap-20">
              <div className="flex-shrink-0">
                {/* 修改：添加点击事件 */}
                <div
                  className="cursor-pointer hover:scale-105 transition-transform duration-200"
                  onClick={() =>
                    setSelectedImage(
                      "https://i2.seadn.io/ethereum/0x26d85a13212433fe6a8381969c2b0db390a0b0ae/8497cf59a89f826df103db2bae50d4/3f8497cf59a89f826df103db2bae50d4.png?w=350"
                    )
                  }
                >
                  <img
                    src="https://i2.seadn.io/ethereum/0x26d85a13212433fe6a8381969c2b0db390a0b0ae/8497cf59a89f826df103db2bae50d4/3f8497cf59a89f826df103db2bae50d4.png?w=350"
                    alt="Web3 NFT"
                    className="w-48 h-48 rounded-lg object-cover border-2 border-amber-400 shadow-sm"
                  />
                </div>
              </div>

              {/* 证书信息保持不变 */}
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {currentContent.nft_10years_title}
                </h3>
                <p className="text-gray-600 mb-4 whitespace-pre-line">
                  {currentContent.nft_10years_desc}
                </p>

                {/* 交互按钮保持不变 */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://opensea.io/item/ethereum/0x26d85a13212433fe6a8381969c2b0db390a0b0ae/602055"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <span>{currentContent.viewNFT}</span>
                  </a>
                  <a
                    href="https://etherscan.io/tx/0x6480ff81bc14a6bc1ebfec07b4640eac839789b8636057b9189388cddc2c0fa7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <span>{currentContent.transaction}</span>
                  </a>
                </div>

                {/* 链上信息保持不变 */}
                <div className="mt-4 text-sm text-gray-500">
                  <p>{currentContent.ownerAddress}: 0x34F3...3612</p>
                  <p>{currentContent.contractAddress}: 0x26D8...B0ae</p>
                  <p>{currentContent.network}: Ethereum Mainnet</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            {currentContent.projects}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">
                {currentContent.project_volcano_title}
              </h4>
              <p className="text-gray-600 mb-4 whitespace-pre-line">
                {currentContent.project_volcano_desc}
              </p>
              <div className="space-x-6">
                {" "}
                {/* 添加水平间距 */}
                <a
                  href="https://github.com/mokaiko/volcano-nft"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://testnet.rarible.com/collection/0x37d272B8d4f844c29eB05C5ABC8271E8f22cFeA3/activity"
                  className="text-blue-600 hover:underline"
                >
                  {currentContent.viewNFT}
                </a>
                <a
                  href="https://youtu.be/g_ULDhqWbtY"
                  className="text-blue-600 hover:underline"
                >
                  {currentContent.viewIntrodactionVideo}
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">
                {currentContent.project_hashtag_title}
              </h4>
              <p className="text-gray-600 mb-4 whitespace-pre-line">
                {currentContent.project_hashtag_desc}
              </p>
              <div className="space-x-6">
                {" "}
                {/* 添加水平间距 */}
                <a
                  href="https://social-media-block-explorer.vercel.app/"
                  className="text-blue-600 hover:underline"
                >
                  {currentContent.viewProject}
                </a>
                <a
                  href="https://youtu.be/b9cp6FqVDuc?si=rXhOVy5ENXnVQ6sk"
                  className="text-blue-600 hover:underline"
                >
                  {currentContent.viewIntrodactionVideo}
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">
                {currentContent.project_cryptotrends_title}
              </h4>
              <p className="text-gray-600 mb-4 whitespace-pre-line">
                {currentContent.project_cryptotrends_desc}
              </p>
              <div className="space-x-6">
                {" "}
                {/* 添加水平间距 */}
                <a
                  href="https://crypto-trends-indicators.vercel.app/index.html"
                  className="text-blue-600 hover:underline"
                >
                  {currentContent.viewProject}
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">
                {currentContent.project_chinese_restaurant_in_tokyo_title}
              </h4>
              <p className="text-gray-600 mb-4 whitespace-pre-line">
                {currentContent.project_chinese_restaurant_in_tokyo_desc}
              </p>
              <div className="space-x-6">
                {" "}
                {/* 添加水平间距 */}
                <a
                  href="https://chinese-restaurants-in-tokyo.vercel.app/"
                  className="text-blue-600 hover:underline"
                >
                  {currentContent.viewProject}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            {currentContent.contact}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="mailto:vipmenghaigang@gmail.com"
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6 mr-3 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mokaiko/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6 mr-3 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/mokaiko/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6 mr-3 text-gray-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://discord.com/users/782056032867188736"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6 mr-3 text-indigo-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02C2.44 8.78 1.71 12.23 2.04 15.64c0 .02.01.04.03.05c1.57 1.15 3.1 1.84 4.59 2.3c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.67 1.19 1.07 1.74c.03.01.06.02.09.01c1.5-.46 3.02-1.15 4.59-2.3c.02-.01.03-.03.03-.05c.36-3.68-.59-7.09-2.29-10.29c-.01-.02-.02-.03-.04-.03zm-10.56 8.08c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.58 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
              </svg>
              <span>Discord</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} {currentContent.name}. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
