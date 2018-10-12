(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{182:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("示例工程：")]),t._v(" "),s("p",[t._v("👉 "),s("a",{attrs:{href:"https://gitee.com/baomidou/mybatis-plus-samples/tree/master/mybatis-plus-sample-pagination",target:"_blank",rel:"noopener noreferrer"}},[t._v("mybatis-plus-sample-pagination"),s("OutboundLink")],1)]),t._v(" "),t._m(1),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"分页插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分页插件","aria-hidden":"true"}},[this._v("#")]),this._v(" 分页插件")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- spring xml 方式 --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugins")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugin")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("interceptor")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.baomidou.mybatisplus.plugins.PaginationInterceptor"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sqlParser"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("自定义解析类、可以没有"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dialectClazz"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("自定义方言类、可以没有"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugin")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugins")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("//Spring boot方式")]),t._v("\n"),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@EnableTransactionManagement")]),t._v("\n"),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@MapperScan")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"com.baomidou.cloud.service.*.mapper*"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("MybatisPlusConfig")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n     * 分页插件\n     */")]),t._v("\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" PaginationInterceptor "),s("span",{attrs:{class:"token function"}},[t._v("paginationInterceptor")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("PaginationInterceptor")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"xml-自定义分页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xml-自定义分页","aria-hidden":"true"}},[this._v("#")]),this._v(" XML 自定义分页")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("UserMapper.java 方法内容")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("UserMapper")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token comment"}},[t._v("//可以继承或者不继承BaseMapper")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n     * <p>\n     * 查询 : 根据state状态查询用户列表，分页显示\n     * 注意!!: 如果入参是有多个,需要加注解指定参数名才能在xml中取值\n     * </p>\n     *\n     * @param page 分页对象,xml中可以从里面进行取值,传递参数 Page 即自动分页,必须放在第一位(你可以继承Page实现自己的分页对象)\n     * @param state 状态\n     * @return 分页对象\n     */")]),t._v("\n    IPage"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("User"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("selectPageVo")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Page page"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Param")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"state"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Integer state"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("UserMapper.xml 等同于编写一个普通 list 查询，mybatis-plus 自动替你分页")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("select")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("selectPageVo"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("resultType")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.baomidou.cloud.entity.UserVo"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    SELECT id,name FROM user WHERE state=#{state}\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("select")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("UserServiceImpl.java 调用分页方法")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" IPage"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("User"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("selectUserPage")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Page"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("User"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" page"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Integer state"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 不进行 count sql 优化，解决 MP 无法自动优化 SQL 问题，这时候你需要自己查询 count 部分")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// page.setOptimizeCountSql(false);")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 当 total 为非 0 时(默认为 0),分页插件不会进行 count 查询")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 要点!! 分页返回的对象与传入的对象是同一个")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" userMapper"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("selectPageVo")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="page.md";a.default=e.exports}}]);