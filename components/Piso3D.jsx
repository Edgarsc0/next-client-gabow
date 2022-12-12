import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Piso3D({selected}) {
  const { nodes, materials } = useGLTF(selected);
  if(selected=="Piso3.glb"){
    return (
      <group  dispose={null}>
        <group position={[0.05, 0.05, 0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={1}>
          <group position={[-42.65, 53.53, 51.2]}>
            <group position={[0, -88.94, 0]} rotation={[0, 0, Math.PI]}>
              <mesh geometry={nodes['3D_Text_10_-_H'].geometry} material={materials['Prestige 2']} position={[-24.43, -5.98, 0.71]} scale={0.22} />
              <mesh geometry={nodes['3D_Text_10_-_o'].geometry} material={materials['Prestige 2']} position={[-16.98, -5.98, 0.71]} scale={0.22} />
              <mesh geometry={nodes['3D_Text_10_-_m'].geometry} material={materials['Prestige 2']} position={[-10.91, -5.98, 0.71]} scale={0.22} />
              <mesh geometry={nodes['3D_Text_10_-_b'].geometry} material={materials['Prestige 2']} position={[-1.55, -5.98, 0.71]} scale={0.22} />
              <mesh geometry={nodes['3D_Text_10_-_r'].geometry} material={materials['Prestige 2']} position={[4.63, -5.98, 0.71]} scale={0.22} />
              <mesh geometry={nodes['3D_Text_10_-_e'].geometry} material={materials['Prestige 2']} position={[8.76, -5.98, 0.71]} scale={0.22} />
              <mesh geometry={nodes['3D_Text_10_-_s'].geometry} material={materials['Prestige 2']} position={[14.43, -5.98, 0.71]} scale={0.22} />
              <mesh geometry={nodes.RestroomSign.geometry} material={materials['Metal 2']} position={[0, -3.05, 19.82]} scale={17.14} />
              <mesh geometry={nodes.Tape.geometry} material={materials['Tape 2']} position={[0, -0.49, 19.82]} scale={8.22} />
            </group>
            <mesh geometry={nodes['3D_Text_11_-_M'].geometry} material={materials['Prestige 3']} position={[-17.84, -5.43, 0.71]} scale={0.23} />
            <mesh geometry={nodes['3D_Text_11_-_u'].geometry} material={materials['Prestige 3']} position={[-8.64, -5.43, 0.71]} scale={0.23} />
            <mesh geometry={nodes['3D_Text_11_-_j'].geometry} material={materials['Prestige 3']} position={[-2.37, -5.43, 0.71]} scale={0.23} />
            <mesh geometry={nodes['3D_Text_11_-_e'].geometry} material={materials['Prestige 3']} position={[0.22, -5.43, 0.71]} scale={0.23} />
            <mesh geometry={nodes['3D_Text_11_-_e_1'].geometry} material={materials['Prestige 3']} position={[10.14, -5.43, 0.71]} scale={0.23} />
            <mesh geometry={nodes['3D_Text_11_-_r'].geometry} material={materials['Prestige 3']} position={[5.96, -5.43, 0.71]} scale={0.23} />
            <mesh geometry={nodes['3D_Text_11_-_s'].geometry} material={materials['Prestige 3']} position={[15.89, -5.43, 0.71]} scale={0.23} />
            <mesh geometry={nodes.RestroomSign_1.geometry} material={materials['Metal 3']} position={[0, -3.05, 19.82]} scale={17.14} />
            <mesh geometry={nodes.Tape_1.geometry} material={materials['Tape 3']} position={[0, -0.49, 19.82]} scale={8.22} />
          </group>
          <group position={[-115.76, 263.72, -12.45]} rotation={[0, 0, -Math.PI]}>
            <mesh geometry={nodes['3D_Text_19_-_F'].geometry} material={materials['Safari 41']} position={[14.48, 474.43, 16.93]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_i'].geometry} material={materials['Safari 41']} position={[20.71, 474.36, 16.93]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_i_1'].geometry} material={materials['Safari 41']} position={[29.49, 474.26, 16.93]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_i_2'].geometry} material={materials['Safari 41']} position={[70.86, 474.02, 30.33]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_s'].geometry} material={materials['Safari 41']} position={[23.75, 474.33, 16.93]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_c'].geometry} material={materials['Safari 41']} position={[32.54, 474.23, 16.93]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_a'].geometry} material={materials['Safari 41']} position={[38.31, 474.16, 16.94]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_a_1'].geometry} material={materials['Safari 41']} position={[21.44, 474.58, 30.33]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_a_2'].geometry} material={materials['Safari 41']} position={[47.69, 474.28, 30.33]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_I'].geometry} material={materials['Safari 41']} position={[48.14, 474.05, 16.94]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_I_1'].geometry} material={materials['Safari 41']} position={[51.51, 474.01, 16.94]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_I_2'].geometry} material={materials['Safari 41']} position={[54.87, 473.97, 16.94]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_I_3'].geometry} material={materials['Safari 41']} position={[70.54, 473.8, 16.94]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_y'].geometry} material={materials['Safari 41']} position={[61.37, 473.9, 16.94]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_V'].geometry} material={materials['Safari 41']} position={[73.91, 473.76, 16.94]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_L'].geometry} material={materials['Safari 41']} position={[15.15, 474.65, 30.32]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_b'].geometry} material={materials['Safari 41']} position={[28.14, 474.5, 30.33]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_o'].geometry} material={materials['Safari 41']} position={[35.51, 474.42, 30.33]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_o_1'].geometry} material={materials['Safari 41']} position={[58.69, 474.16, 30.33]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_o_2'].geometry} material={materials['Safari 41']} position={[73.91, 473.99, 30.34]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_r'].geometry} material={materials['Safari 41']} position={[42.76, 474.34, 30.33]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_r_1'].geometry} material={materials['Safari 41']} position={[65.94, 474.08, 30.33]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_19_-_t'].geometry} material={materials['Safari 41']} position={[54.39, 474.21, 30.33]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_21_-_Q'].geometry} material={materials['Safari 43']} position={[78.2, 65.3, 8.08]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_u'].geometry} material={materials['Safari 43']} position={[70.47, 65.3, 8.08]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_i'].geometry} material={materials['Safari 43']} position={[64.37, 65.3, 8.08]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_i_1'].geometry} material={materials['Safari 43']} position={[52.66, 65.3, 8.08]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_i_2'].geometry} material={materials['Safari 43']} position={[30.39, 65.3, 19.13]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_m'].geometry} material={materials['Safari 43']} position={[61.86, 65.3, 8.08]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_c'].geometry} material={materials['Safari 43']} position={[50.15, 65.3, 8.08]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_a'].geometry} material={materials['Safari 43']} position={[45.38, 65.3, 8.08]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_a_1'].geometry} material={materials['Safari 43']} position={[71.15, 65.3, 19.13]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_a_2'].geometry} material={materials['Safari 43']} position={[49.5, 65.3, 19.13]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_I'].geometry} material={materials['Safari 43']} position={[37.28, 65.3, 8.08]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_I_1'].geometry} material={materials['Safari 43']} position={[24.36, 65.3, 8.08]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_I_2'].geometry} material={materials['Safari 43']} position={[21.58, 65.3, 8.08]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_y'].geometry} material={materials['Safari 43']} position={[31.92, 65.3, 8.08]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_L'].geometry} material={materials['Safari 43']} position={[76.34, 65.3, 19.13]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_b'].geometry} material={materials['Safari 43']} position={[65.63, 65.3, 19.13]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_o'].geometry} material={materials['Safari 43']} position={[59.55, 65.3, 19.13]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_o_1'].geometry} material={materials['Safari 43']} position={[40.44, 65.3, 19.13]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_o_2'].geometry} material={materials['Safari 43']} position={[27.88, 65.3, 19.13]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_r'].geometry} material={materials['Safari 43']} position={[53.57, 65.3, 19.13]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_r_1'].geometry} material={materials['Safari 43']} position={[34.46, 65.3, 19.13]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_21_-_t'].geometry} material={materials['Safari 43']} position={[43.98, 65.3, 19.13]} rotation={[0, 0, Math.PI]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_22_-_Q'].geometry} material={materials['Safari 44']} position={[-2.33, 92.42, 8.04]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_22_-_u'].geometry} material={materials['Safari 44']} position={[-2.33, 100.15, 8.04]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_22_-_u_1'].geometry} material={materials['Safari 44']} position={[-2.33, 114.86, 19.09]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_22_-_i'].geometry} material={materials['Safari 44']} position={[-2.33, 106.25, 8.04]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_22_-_i_1'].geometry} material={materials['Safari 44']} position={[-2.33, 117.96, 8.04]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_22_-_m'].geometry} material={materials['Safari 44']} position={[-2.33, 108.76, 8.04]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_22_-_c'].geometry} material={materials['Safari 44']} position={[-2.33, 120.47, 8.04]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_22_-_a'].geometry} material={materials['Safari 44']} position={[-2.33, 125.23, 8.04]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_22_-_a_1'].geometry} material={materials['Safari 44']} position={[-2.33, 105.79, 19.09]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_22_-_a_2'].geometry} material={materials['Safari 44']} position={[-2.33, 125.02, 19.09]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_22_-_J'].geometry} material={materials['Safari 44']} position={[-2.33, 94.19, 19.09]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_22_-_e'].geometry} material={materials['Safari 44']} position={[-2.33, 96.86, 19.09]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_22_-_f'].geometry} material={materials['Safari 44']} position={[-2.33, 102.44, 19.09]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_22_-_t'].geometry} material={materials['Safari 44']} position={[-2.33, 111.31, 19.09]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_22_-_r'].geometry} material={materials['Safari 44']} position={[-2.33, 120.95, 19.09]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_Q'].geometry} material={materials['Safari 42']} position={[-2.33, 140.1, 7.99]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_u'].geometry} material={materials['Safari 42']} position={[-2.33, 147.84, 7.99]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_i'].geometry} material={materials['Safari 42']} position={[-2.33, 153.93, 7.99]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_i_1'].geometry} material={materials['Safari 42']} position={[-2.33, 165.65, 7.99]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_i_2'].geometry} material={materials['Safari 42']} position={[-2.33, 192.98, 19.03]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_m'].geometry} material={materials['Safari 42']} position={[-2.33, 156.44, 7.99]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_c'].geometry} material={materials['Safari 42']} position={[-2.33, 168.16, 7.99]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_a'].geometry} material={materials['Safari 42']} position={[-2.33, 172.92, 7.99]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_a_1'].geometry} material={materials['Safari 42']} position={[-2.33, 152.22, 19.03]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_a_2'].geometry} material={materials['Safari 42']} position={[-2.33, 173.87, 19.03]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_I'].geometry} material={materials['Safari 42']} position={[-2.33, 181.02, 7.99]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_I_1'].geometry} material={materials['Safari 42']} position={[-2.33, 183.8, 7.99]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_I_2'].geometry} material={materials['Safari 42']} position={[-2.33, 186.58, 7.99]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_I_3'].geometry} material={materials['Safari 42']} position={[-2.33, 199.5, 7.99]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_y'].geometry} material={materials['Safari 42']} position={[-2.33, 191.94, 7.99]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_V'].geometry} material={materials['Safari 42']} position={[-2.33, 202.28, 7.99]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_L'].geometry} material={materials['Safari 42']} position={[-2.33, 147.03, 19.03]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_b'].geometry} material={materials['Safari 42']} position={[-2.33, 157.74, 19.03]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_o'].geometry} material={materials['Safari 42']} position={[-2.33, 163.82, 19.03]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_o_1'].geometry} material={materials['Safari 42']} position={[-2.33, 182.94, 19.03]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_o_2'].geometry} material={materials['Safari 42']} position={[-2.33, 195.49, 19.03]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_r'].geometry} material={materials['Safari 42']} position={[-2.33, 169.81, 19.03]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_r_1'].geometry} material={materials['Safari 42']} position={[-2.33, 188.92, 19.03]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_20_-_t'].geometry} material={materials['Safari 42']} position={[-2.33, 179.39, 19.03]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_18_-_A'].geometry} material={materials['Safari 25']} position={[-2.33, 404.51, 19.26]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.24} />
            <mesh geometry={nodes['3D_Text_18_-_s'].geometry} material={materials['Safari 25']} position={[-2.33, 410.39, 15.61]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.24} />
            <mesh geometry={nodes['3D_Text_18_-_s_1'].geometry} material={materials['Safari 25']} position={[-2.33, 420.04, 9.63]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.24} />
            <mesh geometry={nodes['3D_Text_18_-_s_2'].geometry} material={materials['Safari 25']} position={[-2.33, 441.37, -3.6]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.24} />
            <mesh geometry={nodes['3D_Text_18_-_e'].geometry} material={materials['Safari 25']} position={[-2.33, 414.82, 12.86]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.24} />
            <mesh geometry={nodes['3D_Text_18_-_o'].geometry} material={materials['Safari 25']} position={[-2.33, 424.46, 6.88]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.24} />
            <mesh geometry={nodes['3D_Text_18_-_r'].geometry} material={materials['Safari 25']} position={[-2.33, 430.06, 3.41]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.24} />
            <mesh geometry={nodes['3D_Text_18_-_i'].geometry} material={materials['Safari 25']} position={[-2.33, 433.85, 1.06]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.24} />
            <mesh geometry={nodes['3D_Text_18_-_a'].geometry} material={materials['Safari 25']} position={[-2.33, 436.2, -0.4]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.24} />
            <mesh geometry={nodes['3D_Text_17_-_F'].geometry} material={materials['Safari 24']} position={[-2.33, 291.89, 13.3]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_17_-_i'].geometry} material={materials['Safari 24']} position={[-2.33, 296.19, 10.63]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_17_-_i_1'].geometry} material={materials['Safari 24']} position={[-2.33, 302.26, 6.87]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_17_-_s'].geometry} material={materials['Safari 24']} position={[-2.33, 298.29, 9.33]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_17_-_c'].geometry} material={materials['Safari 24']} position={[-2.33, 304.37, 5.56]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_17_-_a'].geometry} material={materials['Safari 24']} position={[-2.33, 308.36, 3.08]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_17_-_a_1'].geometry} material={materials['Safari 24']} position={[-2.33, 303.49, 18.93]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_17_-_a_2'].geometry} material={materials['Safari 24']} position={[-2.33, 319.61, 8.93]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_17_-_J'].geometry} material={materials['Safari 24']} position={[-2.33, 293.77, 24.96]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_17_-_e'].geometry} material={materials['Safari 24']} position={[-2.33, 296.01, 23.57]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_17_-_f'].geometry} material={materials['Safari 24']} position={[-2.33, 300.69, 20.67]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_17_-_t'].geometry} material={materials['Safari 24']} position={[-2.33, 308.12, 16.06]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_17_-_u'].geometry} material={materials['Safari 24']} position={[-2.33, 311.1, 14.21]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_17_-_r'].geometry} material={materials['Safari 24']} position={[-2.33, 316.21, 11.04]} rotation={[-0.56, 0, Math.PI / 2]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_15_-_F'].geometry} material={materials['Safari 16']} position={[-2.33, 339.16, 3.43]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_15_-_i'].geometry} material={materials['Safari 16']} position={[-2.33, 345.38, 3.43]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_15_-_i_1'].geometry} material={materials['Safari 16']} position={[-2.33, 354.17, 3.43]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_15_-_i_2'].geometry} material={materials['Safari 16']} position={[-2.33, 389.39, 16.82]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_15_-_s'].geometry} material={materials['Safari 16']} position={[-2.33, 348.42, 3.43]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_15_-_c'].geometry} material={materials['Safari 16']} position={[-2.33, 357.21, 3.43]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_15_-_a'].geometry} material={materials['Safari 16']} position={[-2.33, 362.98, 3.43]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_15_-_a_1'].geometry} material={materials['Safari 16']} position={[-2.33, 339.96, 16.82]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_15_-_a_2'].geometry} material={materials['Safari 16']} position={[-2.33, 366.21, 16.82]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_15_-_I'].geometry} material={materials['Safari 16']} position={[-2.33, 372.81, 3.43]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_15_-_I_1'].geometry} material={materials['Safari 16']} position={[-2.33, 388.48, 3.43]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_15_-_I_2'].geometry} material={materials['Safari 16']} position={[-2.33, 391.85, 3.43]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_15_-_y'].geometry} material={materials['Safari 16']} position={[-2.33, 379.31, 3.43]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_15_-_L'].geometry} material={materials['Safari 16']} position={[-2.33, 333.67, 16.82]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_15_-_b'].geometry} material={materials['Safari 16']} position={[-2.33, 346.66, 16.82]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_15_-_o'].geometry} material={materials['Safari 16']} position={[-2.33, 354.04, 16.82]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_15_-_o_1'].geometry} material={materials['Safari 16']} position={[-2.33, 377.21, 16.82]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_15_-_o_2'].geometry} material={materials['Safari 16']} position={[-2.33, 392.43, 16.82]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_15_-_r'].geometry} material={materials['Safari 16']} position={[-2.33, 361.29, 16.82]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_15_-_r_1'].geometry} material={materials['Safari 16']} position={[-2.33, 384.46, 16.82]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_15_-_t'].geometry} material={materials['Safari 16']} position={[-2.33, 372.91, 16.82]} rotation={[0, 0, Math.PI / 2]} scale={0.27} />
            <mesh geometry={nodes['3D_Text_12_-_6'].geometry} material={materials['Safari 17']} position={[-216.75, 83.99, 0]} rotation={[0, 0, Math.PI / 2]} scale={0.72} />
            <mesh geometry={nodes['3D_Text_1_-_5'].geometry} material={materials['Safari 18']} position={[-216.75, 145.34, 0]} rotation={[0, 0, Math.PI / 2]} scale={0.72} />
            <mesh geometry={nodes['3D_Text_2_-_4'].geometry} material={materials['Safari 19']} position={[-216.75, 204.1, 0]} rotation={[0, 0, Math.PI / 2]} scale={0.72} />
            <mesh geometry={nodes['3D_Text_3_-_3'].geometry} material={materials['Safari 20']} position={[-216.75, 265.77, 0]} rotation={[0, 0, Math.PI / 2]} scale={0.72} />
            <mesh geometry={nodes['3D_Text_4_-_2'].geometry} material={materials['Safari 21']} position={[-216.75, 362.37, 0]} rotation={[0, 0, Math.PI / 2]} scale={0.72} />
            <mesh geometry={nodes['3D_Text_5_-_1'].geometry} material={materials['Safari 22']} position={[-216.75, 424.25, 0]} rotation={[0, 0, Math.PI / 2]} scale={0.72} />
            <mesh geometry={nodes['3D_Text_6_-_7'].geometry} material={materials['Safari 23']} position={[-140.1, 61.85, 6.35]} rotation={[0, 0, Math.PI]} scale={0.72} />
            <mesh geometry={nodes['3D_Text_16_-_B'].geometry} material={materials['Safari 40']} position={[-212.42, 306.63, 13.49]} rotation={[-0.58, -0.02, Math.PI / 2]} scale={0.31} />
            <mesh geometry={nodes['3D_Text_16_-_o'].geometry} material={materials['Safari 40']} position={[-212.42, 314.09, 8.65]} rotation={[-0.58, -0.02, Math.PI / 2]} scale={0.31} />
            <mesh geometry={nodes['3D_Text_16_-_d'].geometry} material={materials['Safari 40']} position={[-212.42, 321.04, 4.14]} rotation={[-0.58, -0.02, Math.PI / 2]} scale={0.31} />
            <mesh geometry={nodes['3D_Text_16_-_e'].geometry} material={materials['Safari 40']} position={[-212.42, 328.1, -0.45]} rotation={[-0.58, -0.02, Math.PI / 2]} scale={0.31} />
            <mesh geometry={nodes['3D_Text_16_-_g'].geometry} material={materials['Safari 40']} position={[-212.42, 334.59, -4.66]} rotation={[-0.58, -0.02, Math.PI / 2]} scale={0.31} />
            <mesh geometry={nodes['3D_Text_16_-_a'].geometry} material={materials['Safari 40']} position={[-212.42, 340.85, -8.73]} rotation={[-0.58, -0.02, Math.PI / 2]} scale={0.31} />
            <mesh geometry={nodes['3D_Text_7_-_D'].geometry} material={materials['Safari 26']} position={[-202.02, 465.25, 17.01]} scale={0.49} />
            <mesh geometry={nodes['3D_Text_7_-_i'].geometry} material={materials['Safari 26']} position={[-186.1, 465.25, 17.07]} scale={0.49} />
            <mesh geometry={nodes['3D_Text_7_-_b'].geometry} material={materials['Safari 26']} position={[-180.56, 465.25, 17.09]} scale={0.49} />
            <mesh geometry={nodes['3D_Text_7_-_u'].geometry} material={materials['Safari 26']} position={[-167.13, 465.25, 17.13]} scale={0.49} />
            <mesh geometry={nodes['3D_Text_7_-_j'].geometry} material={materials['Safari 26']} position={[-153.67, 465.25, 17.18]} scale={0.49} />
            <mesh geometry={nodes['3D_Text_7_-_o'].geometry} material={materials['Safari 26']} position={[-148.12, 465.25, 17.2]} scale={0.49} />
            <mesh geometry={nodes['3D_Text_7_-_I'].geometry} material={materials['Safari 26']} position={[-129.22, 465.25, 17.26]} scale={0.49} />
          </group>
          <group position={[-14, -5.38, -49.95]}>
            <mesh geometry={nodes['Box_-_baked_12'].geometry} material={materials['Alpine 10']} position={[-98.4, -293.4, 0]} />
            <mesh geometry={nodes['Box_-_baked_7'].geometry} material={materials['Congo 2']} position={[117.55, -227.03, 0]} rotation={[0, 0, Math.PI]} scale={[1.3, 1, 1]} />
            <mesh geometry={nodes['Box_-_baked_13'].geometry} material={materials['Congo 3']} position={[63.18, 226.12, 0]} scale={[1.3, 1, 1]} />
            <mesh geometry={nodes['Box_-_baked_8'].geometry} material={materials['Alpine 12']} position={[-98.21, 115.89, -0.36]} />
            <mesh geometry={nodes['Box_-_baked_1'].geometry} material={materials['Alpine 11']} position={[131.43, 68.89, 0]} />
            <mesh geometry={nodes['Box_-_baked_2'].geometry} material={materials['Alpine 15']} position={[131.43, 8.17, 0]} />
            <mesh geometry={nodes['Box_-_baked_3'].geometry} material={materials['Alpine 16']} position={[131.43, -52.41, 0]} />
            <mesh geometry={nodes['Box_-_baked_14'].geometry} material={materials['Alpine 30']} position={[131.43, -146.23, 0]} />
            <mesh geometry={nodes['Box_-_baked_4'].geometry} material={materials['Alpine 17']} position={[131.43, -112.7, 0]} />
            <mesh geometry={nodes['Box_-_baked_5'].geometry} material={materials['Alpine 18']} position={[131.43, -206.25, 0]} />
            <mesh geometry={nodes['Box_-_baked_22'].geometry} material={materials['Alpine 37']} position={[-135.55, 186.38, -16.14]} rotation={[0, 0, 1.57]} />
            <mesh geometry={nodes['Box_-_baked_20'].geometry} material={materials['Alpine 35']} position={[-148.07, 148.95, 75.21]} />
            <mesh geometry={nodes['Box_-_baked_23'].geometry} material={materials['Alpine 36']} position={[-98.46, -38.92, 0]} />
            <mesh geometry={nodes.Merged_Objects.geometry} material={materials['Alpine 38']} position={[-77.75, -34.97, 0]} />
            <mesh geometry={nodes['Box_-_baked_19'].geometry} material={materials['Alpine 34']} position={[57.16, -135.75, -164.4]} />
            <mesh geometry={nodes['Box_-_baked_17'].geometry} material={materials['Alpine 32']} position={[30.28, -89.58, -167.2]} />
            <mesh geometry={nodes['Box_-_baked_16'].geometry} material={materials['Alpine 31']} position={[-235.1, -205.85, 0]} rotation={[0, 0, -Math.PI / 2]} />
            <mesh geometry={nodes['Box_-_baked_6'].geometry} material={materials['Alpine 19']} position={[131.43, -266.47, 0]} />
            <mesh geometry={nodes['Plane_-_baked'].geometry} material={materials['Diesel 1']} position={[-425, 509.9, 0]} />
          </group>
          <mesh geometry={nodes.vase.geometry} material={materials['Material.001 6']} position={[-200.12, -27.84, -49.85]} scale={134.06} />
          <mesh geometry={nodes.cane1.geometry} material={materials['Material.003 15']} position={[-200.12, -27.84, -49.85]} scale={134.06} />
          <mesh geometry={nodes.cane2.geometry} material={materials['Material.003 16']} position={[-200.12, -27.84, -49.85]} scale={134.06} />
          <mesh geometry={nodes.cane3.geometry} material={materials['Material.003 17']} position={[-200.12, -27.84, -49.85]} scale={134.06} />
          <mesh geometry={nodes.cane4.geometry} material={materials['Material.003 18']} position={[-200.12, -27.84, -49.85]} scale={134.06} />
          <mesh geometry={nodes.wave1.geometry} material={materials['Material.002 13']} position={[-200.12, -27.84, -49.85]} scale={134.06} />
          <mesh geometry={nodes.wave2.geometry} material={materials['Material.002 14']} position={[-200.12, -27.84, -49.85]} scale={134.06} />
          <mesh geometry={nodes.wave3.geometry} material={materials['Material.002 15']} position={[-199.52, -28.23, -49.85]} scale={134.06} />
          <mesh geometry={nodes.wave4.geometry} material={materials['Material.002 16']} position={[-200.12, -27.84, -49.85]} scale={134.06} />
          <mesh geometry={nodes.vase_1.geometry} material={materials['Material.001 7']} position={[-200.12, 126.59, -49.85]} scale={134.06} />
          <mesh geometry={nodes.cane1_1.geometry} material={materials['Material.003 19']} position={[-200.12, 126.59, -49.85]} scale={134.06} />
          <mesh geometry={nodes.cane2_1.geometry} material={materials['Material.003 20']} position={[-200.12, 126.59, -49.85]} scale={134.06} />
          <mesh geometry={nodes.cane3_1.geometry} material={materials['Material.003 21']} position={[-200.12, 126.59, -49.85]} scale={134.06} />
          <mesh geometry={nodes.cane4_1.geometry} material={materials['Material.003 22']} position={[-200.12, 126.59, -49.85]} scale={134.06} />
          <mesh geometry={nodes.wave1_1.geometry} material={materials['Material.002 17']} position={[-200.12, 126.59, -49.85]} scale={134.06} />
          <mesh geometry={nodes.wave2_1.geometry} material={materials['Material.002 18']} position={[-200.12, 126.59, -49.85]} scale={134.06} />
          <mesh geometry={nodes.wave3_1.geometry} material={materials['Material.002 19']} position={[-199.52, 126.2, -49.85]} scale={134.06} />
          <mesh geometry={nodes.wave4_1.geometry} material={materials['Material.002 20']} position={[-200.12, 126.59, -49.85]} scale={134.06} />
          <mesh geometry={nodes.pot.geometry} material={materials['Subsurface Textured 2']} position={[-198.8, 40.3, -49.95]} rotation={[0, 0, -0.02]} scale={0.11} />
          <mesh geometry={nodes.dirt.geometry} material={materials['Material.003 23']} position={[-198.8, 40.3, -49.95]} rotation={[0, 0, -0.02]} scale={0.11} />
          <mesh geometry={nodes.plant.geometry} material={materials['Material.001 8']} position={[-198.8, 40.3, -49.95]} rotation={[0, 0, -0.02]} scale={0.11} />
          <mesh geometry={nodes.plant_1.geometry} material={materials['Material.001 9']} position={[-198.8, -113.03, -49.95]} rotation={[0, 0, -0.02]} scale={0.11} />
          <mesh geometry={nodes.dirt_1.geometry} material={materials['Material.003 24']} position={[-198.8, -113.03, -49.95]} rotation={[0, 0, -0.02]} scale={0.11} />
          <mesh geometry={nodes.pot_1.geometry} material={materials['Subsurface Textured 3']} position={[-198.8, -113.03, -49.95]} rotation={[0, 0, -0.02]} scale={0.11} />
        </group>
      </group>
    )
  }if(selected=="Piso2.glb"){
    return(<group  dispose={null}>
      <group position={[0.07, 0.05, 0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={1}>
        <group position={[-42.65, 53.53, 51.2]}>
          <group position={[0, -88.94, 0]} rotation={[0, 0, Math.PI]}>
            <mesh geometry={nodes['3D_Text_10_-_H'].geometry} material={materials['Prestige 2']} position={[-24.43, -5.98, 0.71]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_10_-_o'].geometry} material={materials['Prestige 2']} position={[-16.98, -5.98, 0.71]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_10_-_m'].geometry} material={materials['Prestige 2']} position={[-10.91, -5.98, 0.71]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_10_-_b'].geometry} material={materials['Prestige 2']} position={[-1.55, -5.98, 0.71]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_10_-_r'].geometry} material={materials['Prestige 2']} position={[4.63, -5.98, 0.71]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_10_-_e'].geometry} material={materials['Prestige 2']} position={[8.76, -5.98, 0.71]} scale={0.22} />
            <mesh geometry={nodes['3D_Text_10_-_s'].geometry} material={materials['Prestige 2']} position={[14.43, -5.98, 0.71]} scale={0.22} />
            <mesh geometry={nodes.RestroomSign.geometry} material={materials['Metal 2']} position={[0, -3.05, 19.82]} scale={17.14} />
            <mesh geometry={nodes.Tape.geometry} material={materials['Tape 2']} position={[0, -0.49, 19.82]} scale={8.22} />
          </group>
          <mesh geometry={nodes['3D_Text_11_-_M'].geometry} material={materials['Prestige 3']} position={[-17.84, -5.43, 0.71]} scale={0.23} />
          <mesh geometry={nodes['3D_Text_11_-_u'].geometry} material={materials['Prestige 3']} position={[-8.64, -5.43, 0.71]} scale={0.23} />
          <mesh geometry={nodes['3D_Text_11_-_j'].geometry} material={materials['Prestige 3']} position={[-2.37, -5.43, 0.71]} scale={0.23} />
          <mesh geometry={nodes['3D_Text_11_-_e'].geometry} material={materials['Prestige 3']} position={[0.22, -5.43, 0.71]} scale={0.23} />
          <mesh geometry={nodes['3D_Text_11_-_e_1'].geometry} material={materials['Prestige 3']} position={[10.14, -5.43, 0.71]} scale={0.23} />
          <mesh geometry={nodes['3D_Text_11_-_r'].geometry} material={materials['Prestige 3']} position={[5.96, -5.43, 0.71]} scale={0.23} />
          <mesh geometry={nodes['3D_Text_11_-_s'].geometry} material={materials['Prestige 3']} position={[15.89, -5.43, 0.71]} scale={0.23} />
          <mesh geometry={nodes.RestroomSign_1.geometry} material={materials['Metal 3']} position={[0, -3.05, 19.82]} scale={17.14} />
          <mesh geometry={nodes.Tape_1.geometry} material={materials['Tape 3']} position={[0, -0.49, 19.82]} scale={8.22} />
        </group>
        <group position={[-115.76, 263.72, -12.45]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes['3D_Text_24_-_C'].geometry} material={materials['Safari 46']} position={[57.27, 94.33, 76.79]} rotation={[0, 0, -Math.PI / 2]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_24_-_u'].geometry} material={materials['Safari 46']} position={[57.27, 89.38, 76.79]} rotation={[0, 0, -Math.PI / 2]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_24_-_u_1'].geometry} material={materials['Safari 46']} position={[57.27, 74.03, 76.79]} rotation={[0, 0, -Math.PI / 2]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_24_-_b'].geometry} material={materials['Safari 46']} position={[57.27, 84.57, 76.79]} rotation={[0, 0, -Math.PI / 2]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_24_-_i'].geometry} material={materials['Safari 46']} position={[57.27, 79.77, 76.79]} rotation={[0, 0, -Math.PI / 2]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_24_-_c'].geometry} material={materials['Safari 46']} position={[57.27, 77.79, 76.79]} rotation={[0, 0, -Math.PI / 2]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_24_-_l'].geometry} material={materials['Safari 46']} position={[57.27, 69.21, 76.79]} rotation={[0, 0, -Math.PI / 2]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_24_-_o'].geometry} material={materials['Safari 46']} position={[57.27, 67.23, 76.79]} rotation={[0, 0, -Math.PI / 2]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_24_-_o_1'].geometry} material={materials['Safari 46']} position={[57.27, 52.54, 76.79]} rotation={[0, 0, -Math.PI / 2]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_24_-_o_2'].geometry} material={materials['Safari 46']} position={[57.27, 37.03, 76.79]} rotation={[0, 0, -Math.PI / 2]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_24_-_P'].geometry} material={materials['Safari 46']} position={[57.27, 60.47, 76.79]} rotation={[0, 0, -Math.PI / 2]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_24_-_r'].geometry} material={materials['Safari 46']} position={[57.27, 55.75, 76.79]} rotation={[0, 0, -Math.PI / 2]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_24_-_r_1'].geometry} material={materials['Safari 46']} position={[57.27, 32.31, 76.79]} rotation={[0, 0, -Math.PI / 2]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_24_-_f'].geometry} material={materials['Safari 46']} position={[57.27, 47.82, 76.79]} rotation={[0, 0, -Math.PI / 2]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_24_-_e'].geometry} material={materials['Safari 46']} position={[57.27, 45.18, 76.79]} rotation={[0, 0, -Math.PI / 2]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_24_-_e_1'].geometry} material={materials['Safari 46']} position={[57.27, 29.1, 76.79]} rotation={[0, 0, -Math.PI / 2]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_24_-_s'].geometry} material={materials['Safari 46']} position={[57.27, 40.77, 76.79]} rotation={[0, 0, -Math.PI / 2]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_24_-_s_1'].geometry} material={materials['Safari 46']} position={[57.27, 24.69, 76.79]} rotation={[0, 0, -Math.PI / 2]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_T'].geometry} material={materials['Safari 47']} position={[25.65, 98.98, 77.29]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_e'].geometry} material={materials['Safari 47']} position={[21.32, 98.98, 77.29]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_e_1'].geometry} material={materials['Safari 47']} position={[7.35, 98.98, 86.02]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_e_2'].geometry} material={materials['Safari 47']} position={[-18.21, 98.98, 94.74]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_c'].geometry} material={materials['Safari 47']} position={[16.92, 98.98, 77.29]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_n'].geometry} material={materials['Safari 47']} position={[13.16, 98.98, 77.29]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_o'].geometry} material={materials['Safari 47']} position={[8.34, 98.98, 77.29]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_o_1'].geometry} material={materials['Safari 47']} position={[1.64, 98.98, 77.29]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_o_2'].geometry} material={materials['Safari 47']} position={[18.36, 98.98, 94.74]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_o_3'].geometry} material={materials['Safari 47']} position={[3.27, 98.98, 94.74]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_o_4'].geometry} material={materials['Safari 47']} position={[-6.64, 98.98, 94.74]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_l'].geometry} material={materials['Safari 47']} position={[3.62, 98.98, 77.29]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_g'].geometry} material={materials['Safari 47']} position={[-3.08, 98.98, 77.29]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_i'].geometry} material={materials['Safari 47']} position={[-7.35, 98.98, 77.29]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_i_1'].geometry} material={materials['Safari 47']} position={[-4.66, 98.98, 94.74]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_a'].geometry} material={materials['Safari 47']} position={[-9.33, 98.98, 77.29]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_a_1'].geometry} material={materials['Safari 47']} position={[-0.98, 98.98, 86.02]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_a_2'].geometry} material={materials['Safari 47']} position={[27.52, 98.98, 94.74]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_a_3'].geometry} material={materials['Safari 47']} position={[10.43, 98.98, 94.74]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_s'].geometry} material={materials['Safari 47']} position={[-13.69, 98.98, 77.29]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_s_1'].geometry} material={materials['Safari 47']} position={[-5.34, 98.98, 86.02]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_N'].geometry} material={materials['Safari 47']} position={[18.07, 98.98, 86.02]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_u'].geometry} material={materials['Safari 47']} position={[12.16, 98.98, 86.02]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_v'].geometry} material={materials['Safari 47']} position={[2.94, 98.98, 86.02]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_L'].geometry} material={materials['Safari 47']} position={[31.62, 98.98, 94.74]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_b'].geometry} material={materials['Safari 47']} position={[23.16, 98.98, 94.74]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_r'].geometry} material={materials['Safari 47']} position={[13.63, 98.98, 94.74]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_r_1'].geometry} material={materials['Safari 47']} position={[-1.45, 98.98, 94.74]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_t'].geometry} material={materials['Safari 47']} position={[6.06, 98.98, 94.74]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_25_-_d'].geometry} material={materials['Safari 47']} position={[-13.4, 98.98, 94.74]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_B'].geometry} material={materials['Safari 45']} position={[30.59, 49.28, 76.69]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_a'].geometry} material={materials['Safari 45']} position={[25.52, 49.28, 76.69]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_a_1'].geometry} material={materials['Safari 45']} position={[-5.97, 49.28, 76.69]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_a_2'].geometry} material={materials['Safari 45']} position={[27.52, 49.28, 85.41]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_a_3'].geometry} material={materials['Safari 45']} position={[10.43, 49.28, 85.41]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_s'].geometry} material={materials['Safari 45']} position={[21.16, 49.28, 76.69]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_s_1'].geometry} material={materials['Safari 45']} position={[-17.86, 49.28, 76.69]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_e'].geometry} material={materials['Safari 45']} position={[17.42, 49.28, 76.69]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_e_1'].geometry} material={materials['Safari 45']} position={[6.17, 49.28, 76.69]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_e_2'].geometry} material={materials['Safari 45']} position={[-18.21, 49.28, 85.41]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_d'].geometry} material={materials['Safari 45']} position={[10.97, 49.28, 76.69]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_d_1'].geometry} material={materials['Safari 45']} position={[-13.4, 49.28, 85.41]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_D'].geometry} material={materials['Safari 45']} position={[-0.28, 49.28, 76.69]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_t'].geometry} material={materials['Safari 45']} position={[-10.34, 49.28, 76.69]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_t_1'].geometry} material={materials['Safari 45']} position={[6.06, 49.28, 85.41]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_o'].geometry} material={materials['Safari 45']} position={[-13.13, 49.28, 76.69]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_o_1'].geometry} material={materials['Safari 45']} position={[18.36, 49.28, 85.41]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_o_2'].geometry} material={materials['Safari 45']} position={[3.27, 49.28, 85.41]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_o_3'].geometry} material={materials['Safari 45']} position={[-6.64, 49.28, 85.41]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_L'].geometry} material={materials['Safari 45']} position={[31.62, 49.28, 85.41]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_b'].geometry} material={materials['Safari 45']} position={[23.16, 49.28, 85.41]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_r'].geometry} material={materials['Safari 45']} position={[13.63, 49.28, 85.41]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_r_1'].geometry} material={materials['Safari 45']} position={[-1.45, 49.28, 85.41]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_23_-_i'].geometry} material={materials['Safari 45']} position={[-4.66, 49.28, 85.41]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_22_-_P'].geometry} material={materials['Safari 44']} position={[13.5, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_22_-_r'].geometry} material={materials['Safari 44']} position={[8.78, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_22_-_r_1'].geometry} material={materials['Safari 44']} position={[-3.41, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_22_-_r_2'].geometry} material={materials['Safari 44']} position={[-19.77, 136.5, 86.47]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_22_-_o'].geometry} material={materials['Safari 44']} position={[5.57, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_22_-_o_1'].geometry} material={materials['Safari 44']} position={[-28.35, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_22_-_g'].geometry} material={materials['Safari 44']} position={[0.85, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_22_-_a'].geometry} material={materials['Safari 44']} position={[-6.62, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_22_-_a_1'].geometry} material={materials['Safari 44']} position={[-18.25, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_22_-_a_2'].geometry} material={materials['Safari 44']} position={[-7.8, 136.5, 86.47]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_22_-_a_3'].geometry} material={materials['Safari 44']} position={[-22.98, 136.5, 86.47]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_22_-_m'].geometry} material={materials['Safari 44']} position={[-10.98, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_22_-_c'].geometry} material={materials['Safari 44']} position={[-22.61, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_22_-_i'].geometry} material={materials['Safari 44']} position={[-26.37, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_22_-_n'].geometry} material={materials['Safari 44']} position={[-33.07, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_22_-_J'].geometry} material={materials['Safari 44']} position={[1.35, 136.5, 86.47]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_22_-_e'].geometry} material={materials['Safari 44']} position={[-0.75, 136.5, 86.47]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_22_-_f'].geometry} material={materials['Safari 44']} position={[-5.16, 136.5, 86.47]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_22_-_t'].geometry} material={materials['Safari 44']} position={[-12.16, 136.5, 86.47]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_22_-_u'].geometry} material={materials['Safari 44']} position={[-14.96, 136.5, 86.47]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_21_-_P'].geometry} material={materials['Safari 43']} position={[13.5, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_21_-_r'].geometry} material={materials['Safari 43']} position={[8.78, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_21_-_r_1'].geometry} material={materials['Safari 43']} position={[-3.41, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_21_-_r_2'].geometry} material={materials['Safari 43']} position={[-19.77, 136.5, 86.47]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_21_-_o'].geometry} material={materials['Safari 43']} position={[5.57, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_21_-_o_1'].geometry} material={materials['Safari 43']} position={[-28.35, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_21_-_g'].geometry} material={materials['Safari 43']} position={[0.85, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_21_-_a'].geometry} material={materials['Safari 43']} position={[-6.62, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_21_-_a_1'].geometry} material={materials['Safari 43']} position={[-18.25, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_21_-_a_2'].geometry} material={materials['Safari 43']} position={[-7.8, 136.5, 86.47]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_21_-_a_3'].geometry} material={materials['Safari 43']} position={[-22.98, 136.5, 86.47]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_21_-_m'].geometry} material={materials['Safari 43']} position={[-10.98, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_21_-_c'].geometry} material={materials['Safari 43']} position={[-22.61, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_21_-_i'].geometry} material={materials['Safari 43']} position={[-26.37, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_21_-_n'].geometry} material={materials['Safari 43']} position={[-33.07, 136.5, 77.75]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_21_-_J'].geometry} material={materials['Safari 43']} position={[1.35, 136.5, 86.47]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_21_-_e'].geometry} material={materials['Safari 43']} position={[-0.75, 136.5, 86.47]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_21_-_f'].geometry} material={materials['Safari 43']} position={[-5.16, 136.5, 86.47]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_21_-_t'].geometry} material={materials['Safari 43']} position={[-12.16, 136.5, 86.47]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_21_-_u'].geometry} material={materials['Safari 43']} position={[-14.96, 136.5, 86.47]} rotation={[0, 0, Math.PI]} scale={0.17} />
          <mesh geometry={nodes['3D_Text_18_-_C'].geometry} material={materials['Safari 25']} position={[-2.33, 360.21, 9.58]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_18_-_u'].geometry} material={materials['Safari 25']} position={[-2.33, 366.76, 5.74]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_18_-_u_1'].geometry} material={materials['Safari 25']} position={[-2.33, 387.12, -6.16]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_18_-_b'].geometry} material={materials['Safari 25']} position={[-2.33, 373.15, 2.01]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_18_-_i'].geometry} material={materials['Safari 25']} position={[-2.33, 379.51, -1.71]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_18_-_c'].geometry} material={materials['Safari 25']} position={[-2.33, 382.14, -3.25]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_18_-_l'].geometry} material={materials['Safari 25']} position={[-2.33, 393.51, -9.9]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_18_-_o'].geometry} material={materials['Safari 25']} position={[-2.33, 396.13, -11.43]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_19_-_P'].geometry} material={materials['Safari 41']} position={[8.87, 474.49, 16.93]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_19_-_r'].geometry} material={materials['Safari 41']} position={[16.12, 474.41, 16.93]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_19_-_r_1'].geometry} material={materials['Safari 41']} position={[34.84, 474.2, 16.93]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_19_-_o'].geometry} material={materials['Safari 41']} position={[21.04, 474.36, 16.93]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_19_-_o_1'].geometry} material={materials['Safari 41']} position={[73.14, 473.77, 16.94]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_19_-_o_2'].geometry} material={materials['Safari 41']} position={[65.58, 474.08, 30.33]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_19_-_g'].geometry} material={materials['Safari 41']} position={[28.3, 474.27, 16.93]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_19_-_a'].geometry} material={materials['Safari 41']} position={[39.77, 474.14, 16.94]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_19_-_a_1'].geometry} material={materials['Safari 41']} position={[57.62, 473.94, 16.94]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_19_-_m'].geometry} material={materials['Safari 41']} position={[46.47, 474.07, 16.94]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_19_-_c'].geometry} material={materials['Safari 41']} position={[64.32, 473.87, 16.94]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_19_-_c_1'].geometry} material={materials['Safari 41']} position={[49.37, 474.26, 30.33]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_19_-_i'].geometry} material={materials['Safari 41']} position={[70.1, 473.8, 16.94]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_19_-_i_1'].geometry} material={materials['Safari 41']} position={[46.33, 474.3, 30.33]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_19_-_n'].geometry} material={materials['Safari 41']} position={[80.39, 473.69, 16.94]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_19_-_C'].geometry} material={materials['Safari 41']} position={[23.97, 474.55, 30.33]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_19_-_u'].geometry} material={materials['Safari 41']} position={[31.56, 474.46, 30.33]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_19_-_u_1'].geometry} material={materials['Safari 41']} position={[55.14, 474.2, 30.33]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_19_-_b'].geometry} material={materials['Safari 41']} position={[38.95, 474.38, 30.33]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_19_-_l'].geometry} material={materials['Safari 41']} position={[62.54, 474.12, 30.33]} rotation={[-0.02, 0, -0.01]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_17_-_S'].geometry} material={materials['Safari 24']} position={[-2.33, 418.73, 10.32]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_17_-_a'].geometry} material={materials['Safari 24']} position={[-2.33, 424.44, 6.98]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_17_-_a_1'].geometry} material={materials['Safari 24']} position={[-2.33, 453.29, 5.62]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_17_-_m'].geometry} material={materials['Safari 24']} position={[-2.33, 430.22, 3.6]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_17_-_s'].geometry} material={materials['Safari 24']} position={[-2.33, 439.85, -2.03]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_17_-_u'].geometry} material={materials['Safari 24']} position={[-2.33, 444.81, -4.94]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_17_-_u_1'].geometry} material={materials['Safari 24']} position={[-2.33, 444.28, 10.89]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_17_-_n'].geometry} material={materials['Safari 24']} position={[-2.33, 451.19, -8.67]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_17_-_g'].geometry} material={materials['Safari 24']} position={[-2.33, 457.58, -12.4]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_17_-_A'].geometry} material={materials['Safari 24']} position={[-2.33, 437.7, 14.74]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_17_-_l'].geometry} material={materials['Safari 24']} position={[-2.33, 450.66, 7.16]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_20_-_d'].geometry} material={materials['Safari 42']} position={[-2.33, 157.23, 7.98]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_d_1'].geometry} material={materials['Safari 42']} position={[-2.33, 153.73, 19.02]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_e'].geometry} material={materials['Safari 42']} position={[-2.33, 163.31, 7.98]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_e_1'].geometry} material={materials['Safari 42']} position={[-2.33, 207.09, 7.98]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_e_2'].geometry} material={materials['Safari 42']} position={[-2.33, 159.82, 19.02]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_e_3'].geometry} material={materials['Safari 42']} position={[-2.33, 175.19, 19.02]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_S'].geometry} material={materials['Safari 42']} position={[-2.33, 171.48, 7.98]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_o'].geometry} material={materials['Safari 42']} position={[-2.33, 176.93, 7.98]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_o_1'].geometry} material={materials['Safari 42']} position={[-2.33, 199.16, 19.02]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_o_2'].geometry} material={materials['Safari 42']} position={[-2.33, 210.16, 19.02]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_o_3'].geometry} material={materials['Safari 42']} position={[-2.33, 174.28, 30.07]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_o_4'].geometry} material={materials['Safari 42']} position={[-2.33, 193.39, 30.07]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_o_5'].geometry} material={materials['Safari 42']} position={[-2.33, 205.95, 30.07]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_f'].geometry} material={materials['Safari 42']} position={[-2.33, 182.91, 7.98]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_t'].geometry} material={materials['Safari 42']} position={[-2.33, 186.25, 7.98]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_t_1'].geometry} material={materials['Safari 42']} position={[-2.33, 189.85, 30.07]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_w'].geometry} material={materials['Safari 42']} position={[-2.33, 189.8, 7.98]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_a'].geometry} material={materials['Safari 42']} position={[-2.33, 197.5, 7.98]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_a_1'].geometry} material={materials['Safari 42']} position={[-2.33, 185.51, 19.02]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_a_2'].geometry} material={materials['Safari 42']} position={[-2.33, 162.68, 30.07]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_a_3'].geometry} material={materials['Safari 42']} position={[-2.33, 184.33, 30.07]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_r'].geometry} material={materials['Safari 42']} position={[-2.33, 203.02, 7.98]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_r_1'].geometry} material={materials['Safari 42']} position={[-2.33, 191.04, 19.02]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_r_2'].geometry} material={materials['Safari 42']} position={[-2.33, 195.1, 19.02]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_r_3'].geometry} material={materials['Safari 42']} position={[-2.33, 180.26, 30.07]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_r_4'].geometry} material={materials['Safari 42']} position={[-2.33, 199.37, 30.07]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_D'].geometry} material={materials['Safari 42']} position={[-2.33, 167.98, 19.02]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_s'].geometry} material={materials['Safari 42']} position={[-2.33, 180.78, 19.02]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_l'].geometry} material={materials['Safari 42']} position={[-2.33, 205.15, 19.02]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_l_1'].geometry} material={materials['Safari 42']} position={[-2.33, 207.65, 19.02]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_L'].geometry} material={materials['Safari 42']} position={[-2.33, 157.49, 30.07]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_b'].geometry} material={materials['Safari 42']} position={[-2.33, 168.2, 30.07]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_20_-_i'].geometry} material={materials['Safari 42']} position={[-2.33, 203.44, 30.07]} rotation={[0, 0, Math.PI / 2]} scale={0.22} />
          <mesh geometry={nodes['3D_Text_15_-_B'].geometry} material={materials['Safari 16']} position={[-2.33, 296.49, 8.53]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_15_-_i'].geometry} material={materials['Safari 16']} position={[-2.33, 303.21, 4.6]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_15_-_i_1'].geometry} material={materials['Safari 16']} position={[-2.33, 326.64, -9.1]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_15_-_i_2'].geometry} material={materials['Safari 16']} position={[-2.33, 341.96, -2.54]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_15_-_o'].geometry} material={materials['Safari 16']} position={[-2.33, 305.84, 3.07]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_15_-_o_1'].geometry} material={materials['Safari 16']} position={[-2.33, 314.73, -2.13]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_15_-_o_2'].geometry} material={materials['Safari 16']} position={[-2.33, 311.44, 15.31]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_15_-_o_3'].geometry} material={materials['Safari 16']} position={[-2.33, 331.44, 3.61]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_15_-_o_4'].geometry} material={materials['Safari 16']} position={[-2.33, 344.58, -4.07]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_15_-_l'].geometry} material={materials['Safari 16']} position={[-2.33, 312.1, -0.59]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_15_-_g'].geometry} material={materials['Safari 16']} position={[-2.33, 320.99, -5.79]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_15_-_a'].geometry} material={materials['Safari 16']} position={[-2.33, 329.27, -10.63]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_15_-_a_1'].geometry} material={materials['Safari 16']} position={[-2.33, 299.29, 22.42]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_15_-_a_2'].geometry} material={materials['Safari 16']} position={[-2.33, 321.95, 9.16]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_15_-_L'].geometry} material={materials['Safari 16']} position={[-2.33, 293.86, 25.59]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_15_-_b'].geometry} material={materials['Safari 16']} position={[-2.33, 305.07, 19.03]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_15_-_r'].geometry} material={materials['Safari 16']} position={[-2.33, 317.7, 11.65]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_15_-_r_1'].geometry} material={materials['Safari 16']} position={[-2.33, 337.7, -0.05]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_15_-_t'].geometry} material={materials['Safari 16']} position={[-2.33, 327.73, 5.78]} rotation={[-0.53, 0, Math.PI / 2]} scale={0.27} />
          <mesh geometry={nodes['3D_Text_12_-_1'].geometry} material={materials['Safari 17']} position={[-216.75, 74.34, 0]} rotation={[0, 0, Math.PI / 2]} scale={0.72} />
          <mesh geometry={nodes['3D_Text_12_-_3'].geometry} material={materials['Safari 17']} position={[-216.75, 92.82, 0]} rotation={[0, 0, Math.PI / 2]} scale={0.72} />
          <mesh geometry={nodes['3D_Text_1_-_1'].geometry} material={materials['Safari 18']} position={[-216.75, 135.59, 0]} rotation={[0, 0, Math.PI / 2]} scale={0.72} />
          <mesh geometry={nodes['3D_Text_1_-_2'].geometry} material={materials['Safari 18']} position={[-216.75, 154.06, 0]} rotation={[0, 0, Math.PI / 2]} scale={0.72} />
          <mesh geometry={nodes['3D_Text_2_-_1'].geometry} material={materials['Safari 19']} position={[-216.75, 197.25, 0]} rotation={[0, 0, Math.PI / 2]} scale={0.72} />
          <mesh geometry={nodes['3D_Text_2_-_1_1'].geometry} material={materials['Safari 19']} position={[-216.75, 215.73, 0]} rotation={[0, 0, Math.PI / 2]} scale={0.72} />
          <mesh geometry={nodes['3D_Text_3_-_1'].geometry} material={materials['Safari 20']} position={[-216.75, 255.56, 0]} rotation={[0, 0, Math.PI / 2]} scale={0.72} />
          <mesh geometry={nodes['3D_Text_3_-_0'].geometry} material={materials['Safari 20']} position={[-216.75, 274.04, 0]} rotation={[0, 0, Math.PI / 2]} scale={0.72} />
          <mesh geometry={nodes['3D_Text_4_-_9'].geometry} material={materials['Safari 21']} position={[-216.75, 362.33, 0]} rotation={[0, 0, Math.PI / 2]} scale={0.72} />
          <mesh geometry={nodes['3D_Text_5_-_8'].geometry} material={materials['Safari 22']} position={[-216.75, 421.94, 0]} rotation={[0, 0, Math.PI / 2]} scale={0.72} />
          <mesh geometry={nodes['3D_Text_6_-_1'].geometry} material={materials['Safari 23']} position={[-129.49, 61.85, 6.35]} rotation={[0, 0, Math.PI]} scale={0.72} />
          <mesh geometry={nodes['3D_Text_6_-_4'].geometry} material={materials['Safari 23']} position={[-147.97, 61.85, 6.35]} rotation={[0, 0, Math.PI]} scale={0.72} />
          <mesh geometry={nodes['3D_Text_16_-_B'].geometry} material={materials['Safari 40']} position={[-212.42, 306.63, 13.49]} rotation={[-0.58, -0.02, Math.PI / 2]} scale={0.31} />
          <mesh geometry={nodes['3D_Text_16_-_o'].geometry} material={materials['Safari 40']} position={[-212.42, 314.09, 8.65]} rotation={[-0.58, -0.02, Math.PI / 2]} scale={0.31} />
          <mesh geometry={nodes['3D_Text_16_-_d'].geometry} material={materials['Safari 40']} position={[-212.42, 321.04, 4.14]} rotation={[-0.58, -0.02, Math.PI / 2]} scale={0.31} />
          <mesh geometry={nodes['3D_Text_16_-_e'].geometry} material={materials['Safari 40']} position={[-212.42, 328.1, -0.45]} rotation={[-0.58, -0.02, Math.PI / 2]} scale={0.31} />
          <mesh geometry={nodes['3D_Text_16_-_g'].geometry} material={materials['Safari 40']} position={[-212.42, 334.59, -4.66]} rotation={[-0.58, -0.02, Math.PI / 2]} scale={0.31} />
          <mesh geometry={nodes['3D_Text_16_-_a'].geometry} material={materials['Safari 40']} position={[-212.42, 340.85, -8.73]} rotation={[-0.58, -0.02, Math.PI / 2]} scale={0.31} />
          <mesh geometry={nodes['3D_Text_7_-_D'].geometry} material={materials['Safari 26']} position={[-205.09, 465.25, 17]} scale={0.49} />
          <mesh geometry={nodes['3D_Text_7_-_i'].geometry} material={materials['Safari 26']} position={[-189.16, 465.25, 17.06]} scale={0.49} />
          <mesh geometry={nodes['3D_Text_7_-_b'].geometry} material={materials['Safari 26']} position={[-183.62, 465.25, 17.08]} scale={0.49} />
          <mesh geometry={nodes['3D_Text_7_-_u'].geometry} material={materials['Safari 26']} position={[-170.19, 465.25, 17.12]} scale={0.49} />
          <mesh geometry={nodes['3D_Text_7_-_j'].geometry} material={materials['Safari 26']} position={[-156.73, 465.25, 17.17]} scale={0.49} />
          <mesh geometry={nodes['3D_Text_7_-_o'].geometry} material={materials['Safari 26']} position={[-151.19, 465.25, 17.19]} scale={0.49} />
          <mesh geometry={nodes['3D_Text_7_-_I'].geometry} material={materials['Safari 26']} position={[-132.28, 465.25, 17.25]} scale={0.49} />
          <mesh geometry={nodes['3D_Text_7_-_I_1'].geometry} material={materials['Safari 26']} position={[-126.15, 465.25, 17.27]} scale={0.49} />
        </group>
        <group position={[-14, -5.38, -49.95]}>
          <mesh geometry={nodes['Box_-_baked_12'].geometry} material={materials['Alpine 10']} position={[-98.4, -293.4, 0]} />
          <mesh geometry={nodes['Box_-_baked_7'].geometry} material={materials['Congo 2']} position={[117.55, -227.03, 0]} rotation={[0, 0, Math.PI]} scale={[1.3, 1, 1]} />
          <mesh geometry={nodes['Box_-_baked_13'].geometry} material={materials['Congo 3']} position={[63.18, 226.12, 0]} scale={[1.3, 1, 1]} />
          <mesh geometry={nodes['Box_-_baked_1'].geometry} material={materials['Alpine 11']} position={[131.43, 68.89, 0]} />
          <mesh geometry={nodes['Box_-_baked_2'].geometry} material={materials['Alpine 15']} position={[131.43, 8.17, 0]} />
          <mesh geometry={nodes['Box_-_baked_3'].geometry} material={materials['Alpine 16']} position={[131.43, -52.41, 0]} />
          <mesh geometry={nodes['Box_-_baked_14'].geometry} material={materials['Alpine 30']} position={[131.43, -146.23, 0]} />
          <mesh geometry={nodes['Box_-_baked_4'].geometry} material={materials['Alpine 17']} position={[131.43, -112.7, 0]} />
          <mesh geometry={nodes['Box_-_baked_5'].geometry} material={materials['Alpine 18']} position={[131.43, -206.25, 0]} />
          <mesh geometry={nodes['Box_-_baked_22'].geometry} material={materials['Alpine 37']} position={[-74.72, 192.57, -16.13]} rotation={[0, 0, 1.57]} />
          <mesh geometry={nodes['Box_-_baked_23'].geometry} material={materials['Alpine 38']} position={[-148.07, 174.95, 74.84]} />
          <mesh geometry={nodes['Box_-_baked_20'].geometry} material={materials['Alpine 35']} position={[-148.07, 125.96, 75.44]} />
          <mesh geometry={nodes['Box_-_baked_21'].geometry} material={materials['Alpine 36']} position={[-98.46, -38.92, 0]} />
          <mesh geometry={nodes['Box_-_baked_19'].geometry} material={materials['Alpine 34']} position={[-104.29, 236.5, -52.93]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes['Box_-_baked_18'].geometry} material={materials['Alpine 33']} position={[-98.46, -186.46, 0]} />
          <mesh geometry={nodes['Box_-_baked_17'].geometry} material={materials['Alpine 32']} position={[-98.46, -229.94, 0]} />
          <mesh geometry={nodes['Box_-_baked_16'].geometry} material={materials['Alpine 31']} position={[-235.1, -205.85, 0]} rotation={[0, 0, -Math.PI / 2]} />
          <mesh geometry={nodes['Box_-_baked_6'].geometry} material={materials['Alpine 19']} position={[131.43, -266.47, 0]} />
          <mesh geometry={nodes['Plane_-_baked'].geometry} material={materials['Diesel 1']} position={[-425, 509.9, 0]} />
        </group>
        <mesh geometry={nodes.vase.geometry} material={materials['Material.001 6']} position={[-200.12, -27.84, -49.85]} scale={134.06} />
        <mesh geometry={nodes.cane1.geometry} material={materials['Material.003 15']} position={[-200.12, -27.84, -49.85]} scale={134.06} />
        <mesh geometry={nodes.cane2.geometry} material={materials['Material.003 16']} position={[-200.12, -27.84, -49.85]} scale={134.06} />
        <mesh geometry={nodes.cane3.geometry} material={materials['Material.003 17']} position={[-200.12, -27.84, -49.85]} scale={134.06} />
        <mesh geometry={nodes.cane4.geometry} material={materials['Material.003 18']} position={[-200.12, -27.84, -49.85]} scale={134.06} />
        <mesh geometry={nodes.wave1.geometry} material={materials['Material.002 13']} position={[-200.12, -27.84, -49.85]} scale={134.06} />
        <mesh geometry={nodes.wave2.geometry} material={materials['Material.002 14']} position={[-200.12, -27.84, -49.85]} scale={134.06} />
        <mesh geometry={nodes.wave3.geometry} material={materials['Material.002 15']} position={[-199.52, -28.23, -49.85]} scale={134.06} />
        <mesh geometry={nodes.wave4.geometry} material={materials['Material.002 16']} position={[-200.12, -27.84, -49.85]} scale={134.06} />
        <mesh geometry={nodes.vase_1.geometry} material={materials['Material.001 7']} position={[-200.12, 126.59, -49.85]} scale={134.06} />
        <mesh geometry={nodes.cane1_1.geometry} material={materials['Material.003 19']} position={[-200.12, 126.59, -49.85]} scale={134.06} />
        <mesh geometry={nodes.cane2_1.geometry} material={materials['Material.003 20']} position={[-200.12, 126.59, -49.85]} scale={134.06} />
        <mesh geometry={nodes.cane3_1.geometry} material={materials['Material.003 21']} position={[-200.12, 126.59, -49.85]} scale={134.06} />
        <mesh geometry={nodes.cane4_1.geometry} material={materials['Material.003 22']} position={[-200.12, 126.59, -49.85]} scale={134.06} />
        <mesh geometry={nodes.wave1_1.geometry} material={materials['Material.002 17']} position={[-200.12, 126.59, -49.85]} scale={134.06} />
        <mesh geometry={nodes.wave2_1.geometry} material={materials['Material.002 18']} position={[-200.12, 126.59, -49.85]} scale={134.06} />
        <mesh geometry={nodes.wave3_1.geometry} material={materials['Material.002 19']} position={[-199.52, 126.2, -49.85]} scale={134.06} />
        <mesh geometry={nodes.wave4_1.geometry} material={materials['Material.002 20']} position={[-200.12, 126.59, -49.85]} scale={134.06} />
        <mesh geometry={nodes.pot.geometry} material={materials['Subsurface Textured 2']} position={[-198.8, 40.3, -49.95]} rotation={[0, 0, -0.02]} scale={0.11} />
        <mesh geometry={nodes.dirt.geometry} material={materials['Material.003 23']} position={[-198.8, 40.3, -49.95]} rotation={[0, 0, -0.02]} scale={0.11} />
        <mesh geometry={nodes.plant.geometry} material={materials['Material.001 8']} position={[-198.8, 40.3, -49.95]} rotation={[0, 0, -0.02]} scale={0.11} />
        <mesh geometry={nodes.plant_1.geometry} material={materials['Material.001 9']} position={[-198.8, -113.03, -49.95]} rotation={[0, 0, -0.02]} scale={0.11} />
        <mesh geometry={nodes.dirt_1.geometry} material={materials['Material.003 24']} position={[-198.8, -113.03, -49.95]} rotation={[0, 0, -0.02]} scale={0.11} />
        <mesh geometry={nodes.pot_1.geometry} material={materials['Subsurface Textured 3']} position={[-198.8, -113.03, -49.95]} rotation={[0, 0, -0.02]} scale={0.11} />
      </group>
    </group>)
  }
}

