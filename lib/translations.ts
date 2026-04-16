export const translations = {
  en: {
    meta: {
      title: "Khoi Pham | Backend Engineer Portfolio",
      description:
        "Portfolio of Khoi Pham - backend engineer focused on system architecture, reliability, and AI integration.",
    },
    navbar: {
      brand: "KHOI PHAM",
      links: {
        home: "Home",
        about: "About",
        projects: "Projects",
        resume: "Resume",
      },
      actions: {
        contact: "Let's Talk",
        languageEnglish: "English",
        languageVietnamese: "Tiếng Việt",
      },
    },
    hero: {
      badge: "Backend Engineering • System Architecture • AI Integration",
      headline:
        "I build backend systems that scale reliably and deliver measurable outcomes.",
      description:
        "Backend engineer focused on platform resilience, data-intensive workloads, and product-aligned infrastructure. I partner with teams to transform complex requirements into dependable, elegant services.",
      primaryCta: "View Projects",
      secondaryCta: "Read CV",
      profileName: "Khoi Pham",
      profileRole: "Fresher Backend Engineer",
      currentFocusLabel: "Current focus",
      currentFocusValue:
        "Building backend systems with microservices, APIs, and AI integration",
      locationLabel: "Location",
      locationValue: "Ho Chi Minh City",
      emailLabel: "Email",
      emailValue: "khoiph.23@gmail.com",
    },
    stats: [
      {
        title: "1+",
        subtitle: "Years Building Backend Products",
      },
      {
        title: "40%",
        subtitle: "API Performance Optimization",
      },
      {
        title: "Focus",
        subtitle: "Architecture, AI, DX",
      },
    ],
    about: {
      eyebrow: "ABOUT",
      headline:
        "I design backend platforms that make product delivery faster, safer, and easier to scale over time.",
      intro:
        "As a fresher backend developer, I have built projects across clinic management systems, e-commerce platforms, and AI-integrated applications. My focus is on writing clean, maintainable code, designing reliable RESTful APIs, and applying structured architecture principles such as Clean Architecture. I am passionate about building systems that deliver good performance, secure user access, and a smooth development workflow while continuously improving my technical skills through real-world projects.",
      pillars: [
        {
          title: "Positioning",
          description:
            "I operate as a backend-first engineer who bridges architecture, implementation, and delivery management. Instead of treating system design and shipping as separate phases, I keep them connected so trade-offs stay explicit and the team can move quickly without sacrificing long-term maintainability.",
        },
        {
          title: "Systems thinking",
          description:
            "I design APIs and service boundaries with change tolerance in mind: clear ownership, predictable contracts, observable behavior, and failure modes that degrade gracefully. This helps teams evolve features safely as product scope grows and dependencies become more complex.",
        },
        {
          title: "Delivery method",
          description:
            "I break roadmap goals into small, testable increments with clear acceptance criteria. Each increment is designed to be releasable, measurable, and reversible when needed. This reduces rollout risk, shortens feedback cycles, and keeps momentum stable across cross-functional teams.",
        },
        {
          title: "Technical strengths",
          description:
            "Core strengths include service design, API reliability, performance tuning, data-flow simplification, and production-ready AI integration. I prioritize solutions that are practical to operate: sensible defaults, actionable telemetry, and straightforward incident response paths.",
        },
        {
          title: "Collaboration style",
          description:
            "I communicate through decision records, concise technical notes, and architecture diagrams that non-engineering teammates can follow. Align product, QA, and engineering around shared risk language so release planning becomes predictable and technical debt is discussed with context, not guesswork.",
        },
        {
          title: "Quality philosophy",
          description:
            "Quality is treated as a continuous property of delivery, not a final checklist. I build it in through coding standards, review discipline, test coverage where it matters most, and production observability from the first release iteration.",
        },
      ],
      contributionTitle: "How I contribute inside teams",
      contributionItems: [
        {
          title: "Architecture with intent:",
          description:
            "I define service boundaries and domain responsibilities early, then pressure-test them with realistic feature scenarios. This keeps scaling decisions grounded in actual product direction and prevents expensive rewrites later.",
        },
        {
          title: "Execution with ownership:",
          description:
            "I drive initiatives from design through implementation and rollout, including release strategy, monitoring, and post-release refinement. The goal is not just \"build done\" but stable outcomes in production behavior.",
        },
        {
          title: "Risk visibility:",
          description:
            "I surface technical and delivery risks early using concrete signals: dependency bottlenecks, unknowns in requirements, migration constraints, and operational blind spots. Teams can then make informed trade-offs before risk becomes incident.",
        },
        {
          title: "Optimization with context:",
          description:
            "I optimize where business and user impact are highest: latency on critical flows, throughput under growth, and reliability of high-frequency operations. This keeps engineering effort aligned with measurable value.",
        },
        {
          title: "Cross-functional alignment:",
          description:
            "I translate backend constraints into product language so roadmap planning stays realistic and transparent. By aligning PM, QA, and engineering on release criteria, we reduce surprises and preserve delivery trust.",
        },
        {
          title: "Operational learning loop:",
          description:
            "I turn incidents, support feedback, and usage telemetry into concrete improvements to architecture and process. This creates a compounding loop where each release improves both product quality and team execution maturity.",
        },
      ],
      exploreTitle: "Explore more work",
      exploreDescription:
        "Visit the projects page for highlights covering architecture decisions, reliability improvements, and delivery outcomes.",
      exploreCta: "View Projects",
    },
    projects: {
      eyebrow: "Projects",
      headline: "Premium backend case studies with measurable delivery impact.",
      intro:
        "Focused projects that highlight architecture clarity, reliability engineering, and platform acceleration for modern product teams.",
      cards: [
        {
          category: "Healthcare System",
          title: "Clinic Management System – Backend",
          subtitle: "Project for Advanced Web Course at Cybersoft",
          summary:
            "A production-ready backend platform architected to optimize clinic workflows, secure patient data, and sustain reliable scheduling at scale through clear service boundaries and role-based access.",
          contextTitle: "Context",
          context:
            "The system was designed to streamline clinic workflows including appointment booking, patient data storage, and secure access for doctors and patients through role-based permissions.",
          contributionsTitle: "Key contributions",
          contributions: [
            "Designed and implemented RESTful API endpoints for appointment booking and patient data management",
            "Implemented JWT-based authentication and role-based access control",
            "Designed entity relationships and database schema for clinic data",
            "Applied Clean Architecture to separate domain logic, application services, infrastructure, and API layer",
            "Integrated Entity Framework Core for database access and CRUD operations",
          ],
          impactTitle: "Impact",
          impacts: [
            "Improved maintainability through layered architecture",
            "Enabled secure role-based access for multiple user types",
            "Simplified clinic workflow automation and appointment scheduling",
            "Built scalable backend structure for future expansion",
          ],
          techStackLabel: "Tech stack",
          techStack:
            ".NET Core, Entity Framework Core, SQL Server, JWT, Swagger, Clean Architecture",
          sourceCta: "View source code →",
        },
        {
          category: "E-Commerce Platform",
          title: "eBay Clone – Backend System",
          subtitle: "Project for Advanced Web Course at Cybersoft",
          summary:
            "A scalable backend stack modeled after eBay, engineered for high-volume product listings, real-time bidding, and secure order processing with maintainable domain-driven boundaries.",
          contextTitle: "Context",
          context:
            "The system was built to simulate a real-world e-commerce auction platform with product listing, bidding flows, user management, and secure order processing.",
          contributionsTitle: "Key contributions",
          contributions: [
            "Implemented REST API endpoints for product listing, bidding, and order management",
            "Developed business logic layer following Clean Architecture principles",
            "Integrated SignalR to support real-time bidding updates",
            "Implemented JWT authentication for secure user access",
            "Managed data persistence with Entity Framework Core and SQL Server",
            "Structured the project using layered architecture: Domain, Application, Infrastructure, API",
          ],
          impactTitle: "Impact",
          impacts: [
            "Enabled real-time bidding updates with SignalR",
            "Improved scalability with layered architecture",
            "Secured user authentication and authorization",
            "Simulated production-style e-commerce backend workflows",
          ],
          techStackLabel: "Tech stack",
          techStack:
            ".NET Core, EF Core, SQL Server, JWT, SignalR, Swagger, Clean Architecture",
          sourceCta: "View source code →",
        },
      ],
    },
    contact: {
      eyebrow: "Let's Connect",
      headline: "Building reliable backend systems with measurable business impact.",
      cta: "Let's Connect",
    },
    footer: {
      name: "Khoi Pham",
      role: "Backend Engineer",
      links: {
        github: "GitHub",
        resume: "Resume",
      },
    },
  },
  vi: {
    meta: {
      title: "Khoi Pham | Hồ sơ kỹ sư Backend",
      description:
        "Hồ sơ nghề nghiệp của Khoi Pham - kỹ sư backend tập trung vào kiến trúc hệ thống, độ tin cậy và tích hợp AI.",
    },
    navbar: {
      brand: "KHOI PHAM",
      links: {
        home: "Trang chủ",
        about: "Giới thiệu",
        projects: "Dự án",
        resume: "CV",
      },
      actions: {
        contact: "Liên hệ",
        languageEnglish: "Tiếng Anh",
        languageVietnamese: "Tiếng Việt",
      },
    },
    hero: {
      badge: "Kỹ thuật Backend • Kiến trúc hệ thống • Tích hợp AI",
      headline:
        "Tôi xây dựng hệ thống backend có khả năng mở rộng ổn định và tạo ra kết quả đo lường được.",
      description:
        "Kỹ sư backend tập trung vào độ bền nền tảng, khối lượng dữ liệu lớn và hạ tầng gắn với sản phẩm. Tôi đồng hành cùng đội ngũ để chuyển hóa yêu cầu phức tạp thành các dịch vụ tin cậy, tinh gọn.",
      primaryCta: "Xem dự án",
      secondaryCta: "Xem CV",
      profileName: "Khoi Pham",
      profileRole: "Kỹ sư Backend mới tốt nghiệp",
      currentFocusLabel: "Tập trung hiện tại",
      currentFocusValue:
        "Xây dựng hệ thống backend với kiến trúc microservices, API và tích hợp AI",
      locationLabel: "Địa điểm",
      locationValue: "TP. Hồ Chí Minh",
      emailLabel: "Email",
      emailValue: "khoiph.23@gmail.com",
    },
    stats: [
      {
        title: "1+",
        subtitle: "Năm phát triển sản phẩm backend",
      },
      {
        title: "40%",
        subtitle: "Tối ưu hiệu năng API",
      },
      {
        title: "Trọng tâm",
        subtitle: "Kiến trúc, AI, DX",
      },
    ],
    about: {
      eyebrow: "GIỚI THIỆU",
      headline:
        "Tôi thiết kế nền tảng backend giúp đội ngũ ra mắt sản phẩm nhanh hơn, an toàn hơn và dễ mở rộng hơn theo thời gian.",
      intro:
        "Là một Fresher Backend Developer, tôi đã tham gia xây dựng các dự án về hệ thống quản lý phòng khám, nền tảng thương mại điện tử và ứng dụng tích hợp AI. Tôi tập trung vào việc phát triển mã nguồn sạch, dễ bảo trì, thiết kế RESTful API ổn định và áp dụng các nguyên tắc kiến trúc phần mềm như Clean Architecture. Tôi luôn hướng đến việc xây dựng các hệ thống có hiệu năng cao, bảo mật tốt và quy trình phát triển mượt mà, đồng thời không ngừng hoàn thiện kỹ năng thông qua các dự án thực tế.",
      pillars: [
        {
          title: "Định vị",
          description:
            "Tôi là kỹ sư backend ưu tiên kiến trúc, kết nối giữa thiết kế, triển khai và quản lý giao hàng. Thay vì tách biệt thiết kế hệ thống và triển khai, tôi giữ chúng đi cùng nhau để các đánh đổi luôn rõ ràng và đội ngũ tiến nhanh mà vẫn bền vững.",
        },
        {
          title: "Tư duy hệ thống",
          description:
            "Tôi thiết kế API và ranh giới dịch vụ có khả năng thích ứng thay đổi: quyền sở hữu rõ ràng, hợp đồng dự đoán được, hành vi quan sát được và cơ chế suy giảm an toàn. Điều này giúp đội ngũ phát triển tính năng an toàn khi phạm vi sản phẩm mở rộng.",
        },
        {
          title: "Phương pháp triển khai",
          description:
            "Tôi chia nhỏ mục tiêu lộ trình sản phẩm thành các bước có thể kiểm thử với tiêu chí chấp nhận rõ ràng. Mỗi bước đều có thể phát hành, đo lường và quay lại khi cần. Cách này giảm rủi ro, rút ngắn vòng phản hồi và giữ nhịp độ ổn định giữa các đội.",
        },
        {
          title: "Thế mạnh kỹ thuật",
          description:
            "Thế mạnh cốt lõi gồm thiết kế dịch vụ, độ tin cậy API, tối ưu hiệu năng, đơn giản hóa luồng dữ liệu và tích hợp AI sẵn sàng vận hành. Tôi ưu tiên giải pháp dễ vận hành: cấu hình hợp lý, dữ liệu quan sát hữu ích và quy trình xử lý sự cố rõ ràng.",
        },
        {
          title: "Phong cách phối hợp",
          description:
            "Tôi truyền đạt qua biên bản quyết định, ghi chú kỹ thuật ngắn gọn và sơ đồ kiến trúc dễ hiểu cho cả đội không chuyên. Tôi đồng bộ sản phẩm, QA và kỹ thuật bằng ngôn ngữ rủi ro chung để kế hoạch phát hành minh bạch và nợ kỹ thuật được thảo luận trong ngữ cảnh.",
        },
        {
          title: "Triết lý chất lượng",
          description:
            "Chất lượng là thuộc tính liên tục trong quá trình giao hàng, không phải checklist cuối cùng. Tôi xây dựng chất lượng từ tiêu chuẩn mã nguồn, kỷ luật review, kiểm thử có trọng tâm và khả năng quan sát vận hành ngay từ lần phát hành đầu tiên.",
        },
      ],
      contributionTitle: "Cách tôi đóng góp trong đội ngũ",
      contributionItems: [
        {
          title: "Kiến trúc có chủ đích:",
          description:
            "Tôi xác định ranh giới dịch vụ và trách nhiệm miền nghiệp vụ từ sớm, sau đó kiểm chứng bằng các kịch bản tính năng thực tế. Điều này giữ quyết định mở rộng bám sát định hướng sản phẩm và tránh phải viết lại tốn kém.",
        },
        {
          title: "Thực thi có sở hữu:",
          description:
            "Tôi dẫn dắt sáng kiến từ thiết kế đến triển khai và phát hành, bao gồm chiến lược phát hành, giám sát và tối ưu sau phát hành. Mục tiêu không chỉ là \"xong code\" mà là hành vi vận hành ổn định.",
        },
        {
          title: "Minh bạch rủi ro:",
          description:
            "Tôi làm rõ rủi ro kỹ thuật và giao hàng sớm thông qua tín hiệu cụ thể: tắc nghẽn phụ thuộc, ẩn số yêu cầu, ràng buộc di trú và điểm mù vận hành. Đội ngũ có thể cân bằng trước khi rủi ro thành sự cố.",
        },
        {
          title: "Tối ưu theo ngữ cảnh:",
          description:
            "Tôi tối ưu nơi tác động kinh doanh và người dùng lớn nhất: độ trễ ở luồng quan trọng, thông lượng khi tăng trưởng và độ tin cậy của thao tác tần suất cao. Nhờ vậy nỗ lực kỹ thuật đi đúng giá trị đo lường được.",
        },
        {
          title: "Đồng bộ đa chức năng:",
          description:
            "Tôi chuyển ngữ ràng buộc backend sang ngôn ngữ sản phẩm để kế hoạch lộ trình sản phẩm thực tế và minh bạch. Khi PM, QA và kỹ thuật đồng bộ tiêu chí phát hành, chúng ta giảm bất ngờ và giữ niềm tin giao hàng.",
        },
        {
          title: "Vòng học vận hành:",
          description:
            "Tôi chuyển sự cố, phản hồi hỗ trợ và dữ liệu quan sát từ hành vi sử dụng thành cải tiến cụ thể cho kiến trúc và quy trình. Điều này tạo vòng lặp cộng hưởng nơi mỗi lần phát hành nâng chất lượng sản phẩm và năng lực thực thi của đội.",
        },
      ],
      exploreTitle: "Khám phá thêm",
      exploreDescription:
        "Ghé trang dự án để xem các điểm nổi bật về quyết định kiến trúc, cải thiện độ tin cậy và kết quả giao hàng.",
      exploreCta: "Xem dự án",
    },
    projects: {
      eyebrow: "Dự án",
      headline: "Dự án backend tiêu biểu với tác động giao hàng đo lường được.",
      intro:
        "Các dự án tập trung thể hiện kiến trúc rõ ràng, kỹ thuật độ tin cậy và tăng tốc nền tảng cho đội ngũ sản phẩm hiện đại.",
      cards: [
        {
          category: "Hệ thống y tế",
          title: "Hệ thống quản lý phòng khám – Backend",
          subtitle: "Đồ án môn Web nâng cao tại Cybersoft",
          summary:
            "Nền tảng backend sẵn sàng vận hành tối ưu quy trình phòng khám, bảo mật dữ liệu bệnh nhân và duy trì lịch hẹn ổn định nhờ ranh giới dịch vụ rõ ràng và phân quyền theo vai trò.",
          contextTitle: "Bối cảnh",
          context:
            "Hệ thống được thiết kế để tối ưu quy trình phòng khám gồm đặt lịch hẹn, lưu trữ dữ liệu bệnh nhân và bảo mật quyền truy cập cho bác sĩ và bệnh nhân thông qua phân quyền.",
          contributionsTitle: "Đóng góp chính",
          contributions: [
            "Thiết kế và triển khai API REST cho đặt lịch hẹn và quản lý dữ liệu bệnh nhân",
            "Triển khai xác thực JWT và phân quyền theo vai trò",
            "Thiết kế quan hệ thực thể và lược đồ cơ sở dữ liệu cho dữ liệu phòng khám",
            "Áp dụng Clean Architecture để tách miền nghiệp vụ, lớp ứng dụng, hạ tầng và lớp API",
            "Tích hợp Entity Framework Core cho truy cập dữ liệu và thao tác CRUD",
          ],
          impactTitle: "Tác động",
          impacts: [
            "Tăng khả năng bảo trì nhờ kiến trúc phân lớp",
            "Cho phép phân quyền an toàn cho nhiều loại người dùng",
            "Đơn giản hóa tự động hóa quy trình phòng khám và đặt lịch",
            "Xây dựng nền tảng backend mở rộng cho tương lai",
          ],
          techStackLabel: "Công nghệ",
          techStack:
            ".NET Core, Entity Framework Core, SQL Server, JWT, Swagger, Clean Architecture",
          sourceCta: "Xem mã nguồn →",
        },
        {
          category: "Nền tảng thương mại điện tử",
          title: "eBay Clone – Hệ thống Backend",
          subtitle: "Đồ án môn Web nâng cao tại Cybersoft",
          summary:
            "Backend mở rộng mô phỏng eBay, tối ưu cho đăng sản phẩm quy mô lớn, đấu giá thời gian thực và xử lý đơn hàng an toàn với ranh giới miền nghiệp vụ rõ ràng.",
          contextTitle: "Bối cảnh",
          context:
            "Hệ thống được xây dựng để mô phỏng nền tảng đấu giá thương mại điện tử với đăng sản phẩm, đấu giá, quản lý người dùng và xử lý đơn hàng an toàn.",
          contributionsTitle: "Đóng góp chính",
          contributions: [
            "Triển khai API REST cho đăng sản phẩm, đấu giá và quản lý đơn hàng",
            "Phát triển lớp nghiệp vụ theo nguyên tắc Clean Architecture",
            "Tích hợp SignalR để cập nhật đấu giá thời gian thực",
            "Triển khai xác thực JWT cho người dùng an toàn",
            "Quản lý dữ liệu với Entity Framework Core và SQL Server",
            "Tổ chức dự án theo kiến trúc tầng: Domain, Application, Infrastructure, API",
          ],
          impactTitle: "Tác động",
          impacts: [
            "Kích hoạt cập nhật đấu giá thời gian thực với SignalR",
            "Tăng khả năng mở rộng nhờ kiến trúc phân tầng",
            "Bảo mật xác thực và phân quyền người dùng",
            "Mô phỏng quy trình backend thương mại điện tử theo tiêu chuẩn vận hành",
          ],
          techStackLabel: "Công nghệ",
          techStack:
            ".NET Core, EF Core, SQL Server, JWT, SignalR, Swagger, Clean Architecture",
          sourceCta: "Xem mã nguồn →",
        },
      ],
    },
    contact: {
      eyebrow: "Kết nối",
      headline: "Xây dựng hệ thống backend tin cậy với tác động kinh doanh đo lường được.",
      cta: "Liên hệ",
    },
    footer: {
      name: "Khoi Pham",
      role: "Kỹ sư Backend",
      links: {
        github: "GitHub",
        resume: "CV",
      },
    },
  },
};
