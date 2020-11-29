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
    about: () => import('@/components/common/edu/About'),
    lecturers: () => import('@/components/common/edu/Lecturers'),
    docs: () => import('@/components/common/edu/Docs'),
    rulers: () => import('@/components/common/edu/structure_SKF/Rulers'),
    standarts: () => import('@/components/common/edu/Standarts'),
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
