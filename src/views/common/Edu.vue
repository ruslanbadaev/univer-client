<template>
  <component :is="$route.params.route"></component>
</template>

<script>
export default {
  name: 'edu',
  components: {
    'join-commission': () => import('@/components/common/edu/joinCommission'),
    'academic-council': () => import('@/components/common/edu/structure_SKF/AcademicCouncil'),
    'faculty-infocommunication': () => import('@/components/common/edu/structure_SKF/FacultyInfocommunication'),
    'faculty-itss': () => import('@/components/common/edu/structure_SKF/FacultyItss'),
    'faculty-ivt': () => import('@/components/common/edu/structure_SKF/FacultyIvt'),
    'faculty-general': () => import('@/components/common/edu/structure_SKF/FacultyGeneral'),
    about: () => import('@/components/common/sveden/About'),
    schedule: () => import('@/components/common/sveden/Schedule'),

    museum: () => import('@/components/common/sveden/HTMLRender'),
    archive: () => import('@/components/common/sveden/HTMLRender'),
    job: () => import('@/components/common/sveden/HTMLRender'),
    sitemap: () => import('@/components/common/sveden/HTMLRender'),
    phonebook: () => import('@/components/common/sveden/HTMLRender'),
    video: () => import('@/components/common/sveden/HTMLRender'),
    virtour: () => import('@/components/common/sveden/HTMLRender'),

    norms: () => import('@/components/common/sveden/HTMLRender'),
    ofo: () => import('@/components/common/sveden/HTMLRender'),
    zfo: () => import('@/components/common/sveden/HTMLRender'),
    opendays: () => import('@/components/common/sveden/HTMLRender'),
    commission: () => import('@/components/common/sveden/HTMLRender'),
    abitur: () => import('@/components/common/sveden/HTMLRender'),
    
    
    /* aaa */
    acts: () => import('@/components/common/sveden/HTMLRender'),
    exp: () => import('@/components/common/sveden/HTMLRender'),
    metodic: () => import('@/components/common/sveden/HTMLRender'),
    doc_form: () => import('@/components/common/sveden/HTMLRender'),
    income: () => import('@/components/common/sveden/HTMLRender'),
    comission: () => import('@/components/common/sveden/HTMLRender'),
    callback: () => import('@/components/common/sveden/HTMLRender'),

    vacant: () => import('@/components/common/sveden/HTMLRender'),
    ovz: () => import('@/components/common/sveden/HTMLRender'),
    inter: () => import('@/components/common/sveden/HTMLRender'),


    /* bbb */
    graduate: () => import('@/components/common/sveden/HTMLRender'),
    graph: () => import('@/components/common/sveden/HTMLRender'),
    stud_job: () => import('@/components/common/sveden/HTMLRender'),
    stud_mrs: () => import('@/components/common/sveden/HTMLRender'),
    stud_portfolio: () => import('@/components/common/sveden/HTMLRender'),
    mu_all: () => import('@/components/common/sveden/HTMLRender'),
    abitur_pp: () => import('@/components/common/sveden/HTMLRender'),
    abitur_stoim: () => import('@/components/common/sveden/HTMLRender'),
    abitur_docs: () => import('@/components/common/sveden/HTMLRender'),
    abitur_pk: () => import('@/components/common/sveden/HTMLRender'),
    abitur_od: () => import('@/components/common/sveden/HTMLRender'),
    abitur_ofo: () => import('@/components/common/sveden/HTMLRender'),
    abitur_zfo: () => import('@/components/common/sveden/HTMLRender'),
    abitur_qpp: () => import('@/components/common/sveden/HTMLRender'),
    abitur_pkr: () => import('@/components/common/sveden/HTMLRender'),
    educational_schw: () => import('@/components/common/sveden/HTMLRender'),
    educational_spektr: () => import('@/components/common/sveden/HTMLRender'),
    educational_studo: () => import('@/components/common/sveden/HTMLRender'),
    science_obj: () => import('@/components/common/sveden/HTMLRender'),
    science_docs: () => import('@/components/common/sveden/HTMLRender'),
    science_work: () => import('@/components/common/sveden/HTMLRender'),
    science_int: () => import('@/components/common/sveden/HTMLRender'),
    science_res: () => import('@/components/common/sveden/HTMLRender'),
    science_olimp: () => import('@/components/common/sveden/HTMLRender'),
    science_meeting: () => import('@/components/common/sveden/HTMLRender'),
    science_proj: () => import('@/components/common/sveden/HTMLRender'),
    science_paper: () => import('@/components/common/sveden/HTMLRender'),
    science_reg: () => import('@/components/common/sveden/HTMLRender'),
    science_res: () => import('@/components/common/sveden/HTMLRender'),
    norms: () => import('@/components/common/sveden/HTMLRender'),
    edu_norms: () => import('@/components/common/sveden/HTMLRender'),
    edu_sched: () => import('@/components/common/sveden/HTMLRender'),
    edu_meth: () => import('@/components/common/sveden/HTMLRender'),
    edu_inres: () => import('@/components/common/sveden/HTMLRender'),
    edu_sched_meth: () => import('@/components/common/sveden/HTMLRender'),
    edu_titul: () => import('@/components/common/sveden/HTMLRender'),
    job_adv: () => import('@/components/common/sveden/HTMLRender'),

    
    
    lecturers: () => import('@/components/common/edu/Lecturers'),
    docs: () => import('@/components/common/edu/Docs'),
    rulers: () => import('@/components/common/edu/structure_SKF/Rulers'),
    standarts: () => import('@/components/common/edu/Standarts'),
    userinfo: () => import('@/components/common/edu/UserInfo'),
    rooms: () => import('@/components/common/edu/Rooms'),
    library: () => import('@/components/common/edu/Library'),
    grants: () => import('@/components/common/edu/Grants'),
    'lab-general-phisics-n-bjd': () => import('@/components/common/edu/laboratory/labGeneralPhisicsnBJD'),
    'lab-css': () => import('@/components/common/edu/laboratory/labCss'),
    'lab-electricity': () => import('@/components/common/edu/laboratory/labElectricity'),
    'lab-ivt': () => import('@/components/common/edu/laboratory/labIvt'),
    'lab-line': () => import('@/components/common/edu/laboratory/labLine'),
    'lab-mts': () => import('@/components/common/edu/laboratory/labMts'),
    'lab-radio': () => import('@/components/common/edu/laboratory/labRadio'),
    'lab-relation': () => import('@/components/common/edu/laboratory/labRelation'),
    'lab-rule': () => import('@/components/common/edu/laboratory/labRule'),
    'main-activity-paid': () => import('@/components/common/edu/mainActivityPaid'),
    'cash-activity': () => import('@/components/common/edu/CashActivity')
  }
}
</script>
