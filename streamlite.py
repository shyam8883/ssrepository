import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
st.write('Hello from Streamlit')
df = pd.read_csv('PCQC1wise.csv')
st.line_chart(data = df[['CONTRIB','QTY']])