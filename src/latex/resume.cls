\NeedsTeXFormat{LaTeX2e}[2025/11/01]
\ProvidesExplClass{resume}{2026/07/25}{1.0.0}{Aragorn's Resume Class}

% arguments
\RequirePackage{l3keys2e}
\tl_new:N \l_resume_font_size_tl
\tl_new:N \l_resume_margin_tl
\tl_new:N \l_resume_section_separator_tl
\tl_new:N \l_resume_subsection_separator_tl
\tl_new:N \l_resume_item_separator_tl
\keys_define:nn{resume}{
    font_size            .tl_set:N  = \l_resume_font_size_tl,
    font_size            .initial:n = 10pt,
    margin               .tl_set:N  = \l_resume_margin_tl,
    margin               .initial:n = 0.35in,
    section_separator    .tl_set:N  = \l_resume_section_separator_tl,
    section_separator    .initial:n = 1em,
    subsection_separator .tl_set:N  = \l_resume_subsection_separator_tl,
    subsection_separator .initial:n = 0.5em,
    item_separator       .tl_set:N  = \l_resume_item_separator_tl,
    item_separator       .initial:n = 0em,
}
\ProcessKeysOptions{resume}

% class
\LoadClass[letterpaper, \l_resume_font_size_tl]{article}

% margin
\RequirePackage[margin=\l_resume_margin_tl]{geometry}

% remove page number
\thispagestyle{empty}

% font
\RequirePackage{fontspec}
\defaultfontfeatures{Ligatures=TeX}
\setmainfont{Liberation Sans}

% title
\RequirePackage{titlesec}
\RequirePackage[normalem]{ulem}
\NewDocumentCommand{\uhfill}{m}{\uline{#1\hfill}}
\titleformat{\section}{\bfseries\large\uppercase}{}{0em}{\uhfill}
\titlespacing{\section}{0pt}{\l_resume_section_separator_tl}{*0}

% unordered list
\RequirePackage{enumitem}
\setlist[itemize]{
    topsep=\l_resume_item_separator_tl,
    itemsep=\l_resume_item_separator_tl,
    parsep=0em,
    labelsep=3pt,
    leftmargin=10pt
}

% links
\usepackage[bookmarks=false]{hyperref}
\hypersetup{hidelinks}

% paragraph indent
\setlength{\parindent}{0pt}
\setlength{\tabcolsep}{0pt}

% title
\tl_new:N \l_resume_name_tl
\tl_new:N \l_resume_email_tl
\tl_new:N \l_resume_phone_tl
\tl_new:N \l_resume_linkedin_tl
\tl_new:N \l_resume_github_tl
\tl_new:N \l_resume_location_tl
\tl_new:N \l_resume_relocation_tl
\keys_define:nn{resume/title}{
    name       .tl_set:N = \l_resume_name_tl,
    email      .tl_set:N = \l_resume_email_tl,
    phone      .tl_set:N = \l_resume_phone_tl,
    linkedin   .tl_set:N = \l_resume_linkedin_tl,
    github     .tl_set:N = \l_resume_github_tl,
    location   .tl_set:N = \l_resume_location_tl,
    relocation .tl_set:N = \l_resume_relocation_tl,
}
\NewDocumentCommand{\resumetitle}{m}
{
    \keys_set:nn{resume/title}{#1}
    {
        \centering
        {\huge\bfseries \l_resume_name_tl}\\
        \vspace{\l_resume_subsection_separator_tl}
        \href{mailto:\l_resume_email_tl}{\l_resume_email_tl}\,\,|\,\,
        \l_resume_phone_tl\,\,|\,\,
        \l_resume_location_tl\\
        \href{https://linkedin.com/in/\l_resume_linkedin_tl}{linkedin.com/in/\l_resume_linkedin_tl}\,\,|\,\,
        \href{https://github.com/\l_resume_github_tl}{github.com/\l_resume_github_tl}\,\,|\,\,
        Open\;to\;\l_resume_relocation_tl\;Relocation\\
        \par
        \vspace{-\l_resume_subsection_separator_tl}
    }
}

% summary
\NewDocumentEnvironment{resumesummary}{}{%
    \section{Summary}
}{}

% experience
\bool_new:N \l_resume_is_first_experience_bool
\tl_new:N \l_resume_experience_company_tl
\tl_new:N \l_resume_experience_location_tl
\tl_new:N \l_resume_experience_title_tl
\tl_new:N \l_resume_experience_start_tl
\tl_new:N \l_resume_experience_end_tl
\keys_define:nn{resume/experience}{
    company  .tl_set:N = \l_resume_experience_company_tl,
    location .tl_set:N = \l_resume_experience_location_tl,
    title    .tl_set:N = \l_resume_experience_title_tl,
    start    .tl_set:N = \l_resume_experience_start_tl,
    end      .tl_set:N = \l_resume_experience_end_tl,
    end      .initial:n = Present,
}
\NewDocumentEnvironment{resumeexperience}{}{
    \bool_set_true:N \l_resume_is_first_experience_bool
    \NewDocumentCommand{\experience}{O{} +m}{
        \tl_clear:N \l_resume_experience_company_tl
        \tl_clear:N \l_resume_experience_location_tl
        \tl_clear:N \l_resume_experience_title_tl
        \tl_clear:N \l_resume_experience_start_tl
        \tl_set:Nn  \l_resume_experience_end_tl{Present}
        \keys_set:nn{resume/experience}{##1}
        \bool_if:NTF \l_resume_is_first_experience_bool {
            \bool_set_false:N \l_resume_is_first_experience_bool
        }{
            \vspace{\l_resume_subsection_separator_tl}
        }
        \textbf{\l_resume_experience_company_tl} \hfill
        \l_resume_experience_location_tl \\
        \l_resume_experience_title_tl \hfill
        \l_resume_experience_start_tl\;--\;\l_resume_experience_end_tl
        \begin{itemize}
            ##2
        \end{itemize}
    }
    \section{Experience}
}{}

% education
\bool_new:N \g_resume_is_first_education_bool
\tl_new:N \g_resume_education_school_tl
\tl_new:N \g_resume_education_location_tl
\tl_new:N \g_resume_education_degree_tl
\tl_new:N \g_resume_education_major_tl
\tl_new:N \g_resume_education_gpa_tl
\tl_new:N \g_resume_education_gpa_max_tl
\tl_new:N \g_resume_education_start_tl
\tl_new:N \g_resume_education_end_tl
\keys_define:nn{resume/education}{
    school   .tl_gset:N = \g_resume_education_school_tl,
    location .tl_gset:N = \g_resume_education_location_tl,
    degree   .tl_gset:N = \g_resume_education_degree_tl,
    major    .tl_gset:N = \g_resume_education_major_tl,
    gpa      .tl_gset:N = \g_resume_education_gpa_tl,
    gpa_max  .tl_gset:N = \g_resume_education_gpa_max_tl,
    gpa_max  .initial:n = 4.00,
    start    .tl_gset:N = \g_resume_education_start_tl,
    end      .tl_gset:N = \g_resume_education_end_tl,
    end      .initial:n = Present,
}
\NewDocumentEnvironment{resumeeducation}{}{
    \bool_gset_true:N \g_resume_is_first_education_bool
    \NewDocumentCommand{\education}{m}{
        \tl_gclear:N \g_resume_education_school_tl
        \tl_gclear:N \g_resume_education_location_tl
        \tl_gclear:N \g_resume_education_degree_tl
        \tl_gclear:N \g_resume_education_major_tl
        \tl_gclear:N \g_resume_education_gpa_tl
        \tl_gset:Nn  \g_resume_education_gpa_max_tl{4.00}
        \tl_gclear:N \g_resume_education_start_tl
        \tl_gset:Nn  \g_resume_education_end_tl{Present}
        \keys_set:nn{resume/education}{##1}
        \bool_if:NTF \g_resume_is_first_education_bool {
            \bool_gset_false:N \g_resume_is_first_education_bool
        }{
            \tabularnewline[\l_resume_subsection_separator_tl]
        }
        \textbf{\g_resume_education_school_tl} & &
        \g_resume_education_location_tl \tabularnewline
        \g_resume_education_degree_tl\;in\;\g_resume_education_major_tl &
        GPA:\;\g_resume_education_gpa_tl/\g_resume_education_gpa_max_tl &
        \g_resume_education_start_tl\;--\;\g_resume_education_end_tl
    }
    \section{Education}
    \begin{tabular*}{\textwidth}{l @{\extracolsep{\fill}} c @{\extracolsep{\fill}} r}
}{
    \end{tabular*}
}

% skill
\tl_new:N \l_resume_skill_group_tl
\keys_define:nn{resume/skill}{
    group .tl_set:N = \l_resume_skill_group_tl,
}
\NewDocumentEnvironment{resumeskill}{}{%
    \NewDocumentCommand{\skill}{O{} m}{
        \tl_clear:N \l_resume_skill_group_tl
        \keys_set:nn{resume/skill}{##1}
        \textbf{\l_resume_skill_group_tl}:\,##2
        \par
    }
    \section{Technical\;Skills}
}{}
